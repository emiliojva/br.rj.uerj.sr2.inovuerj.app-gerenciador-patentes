<?php
/**
 * Created by PhpStorm.
 * User: Administrador
 * Date: 12/8/2020
 * Time: 3:34 PM
 */

namespace Core;

use Core\CORS\CorsMiddleware;
use Core\DI\Resolver;
use Core\Interfaces\IGlobal;
use Core\Interfaces\TemplateEngineInterface;
use Core\Renderer\PHPRendererInterface;
use Core\Router\Dispatcher;
use Core\Router\Request;
use Core\Router\Router;

class App
{

  /**
   * Depachante.
   * Camada responsavel por delegar controle das rotas e requisicoes
   * @property Dispatcher \Core\Router\Dispatcher
   */
  private $_dispatcher;

  /**
   * @property CorsMiddleware
   */
  public static $CORS;

  /**
   * @property PHPRendererInterface
   */
  private $renderer;

  /**
   * @property \Core\Controller\ControllerViewEngine
   */
  private $template_engine;

  private static $instance = null;

  /**
   * controller default que possui settings de comportamento dos demais
   *
   * @property string $controller
   */
  private $controller_default = 'PublicController';
  private $pageNotFoundAction = 'pageNotFound';

  /**
   * __contructor
   * @return App
   */
  public function __construct(PHPRendererInterface $renderer, \Core\Controller\ControllerViewEngine $template_engine)
  {
    /**
     * Carregando Helpers/Ajudantes
     */
    require_once 'Helpers/functions.helpers.php';

    $this->renderer = $renderer;
    $this->template_engine = $template_engine->getTemplateEngineInstance();

    /**
     * Manipulador da Camada Dispatcher()
     */
    $this->_dispatcher = new \Core\Router\Dispatcher();

    self::$instance = $this;

  }

  public function __callStatic($method, $arguments)
  {
    if(self::$instance)
      self::$instance->{$method}(...$arguments);
  }

  public function setControllerPageNotFoundAction($controller, $action)
  {
    $this->controller_default = $controller;
    $this->pageNotFoundAction = $action;
  }

  public function getControllerPageNotFoundAction()
  {
    return "{$this->controller_default}@{$this->pageNotFoundAction}";
  }

  /**
   * Despachante para controladores
   */
  public function dispatcher()
  {

    /**
     * Rota não existe na collection de rotas
     * Tratamento para page-not-found
     */
    $method = $this->getControllerPageNotFoundAction();
    $params = [];

     /**
     * pega o retorno do dispatcher ja resolvido com callback e params da rota.
     */
    $result = $this->_dispatcher->run();

    

    if (!is_null($result)){
      $method = $result['callback'];
      $params = $result['params'];
    } else {

      if(Request::isAjax()){
        @header('Content-type: application/json');
        echo json_encode(['error'=>true, '_body'=>'Page not Found']); exit(1);
      }

    }

    $this->run($method, $params);

    return $this;

  }

  /**
   * Defines Renderer strategy
   *
   * @param PHPRendererInterface $renderer
   * @return void
   */
  public function setRender(PHPRendererInterface $renderer)
  {
    $this->renderer = $renderer;
    return $this;
  }

  public function setTemplateEngine(\Core\Controller\ControllerViewEngine $template_engine){
    $this->template_engine = $template_engine->getTemplateEngineInstance();;
    return $this;
  }

  public function getTemplateEngine(){
    return $this->template_engine;
  }

  /**
   * Endpoint da aplicação.
   *
   * Neste ponto, o fluxo da aplicacao foi finalizado.
   * O controller e action serão executados de acordo com o metodo function(callable) ou controller(class@method)
   *
   * @param $method
   * @param $params
   * @throws \Exception
   */
  private function run($method, $params)
  {
    $data = null;

    try {

      /**
       * Verifica se a rota é string e com padrão regex /^([A-Z]{1}[a-z]+Controller)@([a-z]+)$/
       * Construção de critério para casa controladores.
       */
      if (is_string($method)) {

        /**
         * Valida se existe controller e method validos para executar pagina
         */
        $result = $this->checkControllerAction($method);

        if ($result['controller'] && $result['action']) {

          $class = $result['controller'];
          $method = $result['action'];

          /**
           *
           * Os parametros dos controllers sendo outros os objetos não são instanciado automaticamente.
           * Para isso, usamos uma padrão de projeto Dependency Injection(Injeção de Dependencia ou DI).
           * Isto garante que todas as classes passadas por parametro
           * serão "resolvidas" ou instanciadas (new Class()).
           *
           * Neste caso, estamos resolvendo uma classe e os parametros do seu construtor(__construct())
           * @see https://php-di.org/doc/understanding-di.html
           */
          $resolver = new Resolver();
          
          /**
           * @var $instanceController \Core\Controller\ControllerAction
           */
          $instanceController = $resolver->byClass($class);

          /**
           * Precisaremos além da instancia da nossa classe de Controller.
           * Agora vamos resolver os parametros do método que a rota executará.
           *
           * Ex: Router::get('/admin','AdminController@index');
           * public function index( Request $request ) { }
           *
           * Precisaremos autoinstanciar o parametro $request de acordo com o tipo "Request"
           *
           */
          $method_dependencies = $resolver->method($class,$method);

          /**
           *  Observem que os parametros são do tipo array e estão sendo combinados
           *  Exemplo de união de arrays com sinal '+'
           */
          $params = array_merge($method_dependencies, $params);

          // dd($this->getTemplateEngine());
          $instanceController->setTemplateEngine($this->getTemplateEngine());
          $instanceController->controller_name    = $class;
          $instanceController->controller_action  = $method;
          $instanceController->active_route       = $this->_dispatcher->getActiveRoute();
          // dd($instanceController);

          /**
           * Invocando metodos dinamicamente e passando parametros resolvidos e da requisição(GET,POST, ETC).
           */
          $data = call_user_func_array([$instanceController, $method], $params);

        } else {

          throw new \Exception('Voce passou um Controller/action invalido:' . $result['controller'] . '@' . $result['action'] . 'Insira uma string com o seguinte padrao: HomeController@index');

        }


      }

      /**
       *  Verifica se o conteúdo da variável pode ser chamado como função(callable)
       */
      if (is_callable($method)) {
        $data = call_user_func_array($method, $params);
      }

      /**
       * Capacitar ao PHPRenderer manipular cabeçalho antes de renderiza-lo
       */
      if(self::$CORS){
        $this->renderer->setCORS(self::$CORS);
      }

      /**
       * Capturando 
       */
      $this->renderer->setData($data);// Pega o retorno resolvido da Rota (Incluindo params) e seta como conteudo do renderer
      $this->renderer->run();

    } catch (\Exception $e) {

      $data = null;
      $msg = "Controller/Action {$method} não podem ser localizados";
      if(Request::isAjax()){
        $data = ['error'=>true, '_body'=>$msg];
      } else {
        $data = $msg;
      }
      $this->renderer->setData($data);// Pega o retorno resolvido da Rota (Incluindo params) e seta como conteudo do renderer
      $this->renderer->run();
    }

    
  }

  /**
   * Valida se string passada equivale a convenção(regra) do nosso microframework
   * Para usar Controllers é preciso usar o seguinte padrão: MinhaClasseController@meumetodo
   * @param $subject
   * @return array
   */
  private function checkControllerAction($subject)
  {

    /**
     * Allow namespace match case into my routes
     */
    $namespace = null;
    if(preg_match('/^([A-Z]{1}[a-z]+\\\)+/',$subject,$vars)){
      $namespace = $vars[0] . '\\';
    }

    /**
     * If has namespace matched into string $subject 
     * includes string $namespace in new pattern regex
     */
    $pattern = "/^({$namespace}([A-Z]{1}[a-z]+)+Controller)@([a-z]{1}[a-zA-Z0-9_-]+)$/"; 

    /**
     * checks if has routes with/without namespace spaces handled aboved
     */
    if (preg_match($pattern, $subject, $variables)) {

      if (!empty($variables[0])) {
        $controller = $variables[1];
        $action = $variables[3];
        $target_controller = "App\\Controllers\\" . $controller;

        if(!class_exists($target_controller,true)){
          throw new \Exception('Namespace ou Classe não existe');
        }

        return [
          'controller' => $target_controller,
          'action' => $action
        ];
      }

      return [];

    }

  }
  
  public static function get($method = null, array $args = [])
  {
    if(!is_null($method)){
      return call_user_func_array([self::$instance,$method],$args);
    }

    return self::$instance;
    
  }
}
