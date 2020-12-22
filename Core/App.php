<?php
/**
 * Created by PhpStorm.
 * User: Administrador
 * Date: 12/8/2020
 * Time: 3:34 PM
 */

namespace Core;

use Core\DI\Resolver;

class App
{

  /**
   * Depachante.
   * Camada responsavel por delegar controle das rotas e requisicoes
   * @var Dispatcher
   */
  private $_dispatcher;

  public function __construct()
  {

    /**
     * Carregando Helpers/Ajudantes
     */
    require_once 'Helpers/functions.helpers.php';


    /**
     * Codificacao charset default
     */
    @header('Content-Type: text/html; charset=UTF-8'); # LIB EMERGENCIAL PARA UTF-8 https://github.com/neitanod/forceutf8


    /**
     * Manipulador da Camada Dispatcher()
     */
    $this->_dispatcher = new \Core\Router\Dispatcher();

  }


  /**
   * Despachante para controladores
   */
  public function dispatcher()
  {
    /**
     * pega o retorno do dispatcher ja resolvido com callback e params da rota.
     */
    $result = $this->_dispatcher->run();

    if (!$result)
      exit('Rota não encontrada');


    $method = $result['callback'];
    $params = $result['params'];


    $this->run($method, $params);


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
    /**
     * Verifica se a rota é string e com padrão regex /^([A-Z]{1}[a-z]+Controller)@([a-z]+)$/
     * Construção de critério para casa controladores.
     */
    if (is_string($method)) {

      $result = $this->checkControllerAction($method);

      if ($result['controller'] && $result['action']) {

        $class = $result['controller'];
        $method = $result['action'];

        /**
         *
         * Os parametros dos controllers sendo outros os objetos não são instanciado automaticamente. Para isso, usamos uma padrão de projeto Dependency Injection(Injeção de Dependencia). Isto garante que todas as classes passadas por parametro serão "resolvidas" ou instanciadas (new Class()).
         * @see https://php-di.org/doc/understanding-di.html
         */
        $resolver = new Resolver();
        $instanceController = $resolver->byClass($class);

        /**
         * Invocando metodos dinamicamente e passando parametros.
         */
        call_user_func_array([$instanceController, $method], $params);


      } else {
        throw new \Exception('Voce passou um Controller/action invalido:' . $result['controller'] . '@' . $result['action'] . 'Insira uma string com o seguinte padrao: HomeController@index');
      }


    }

    /**
     *  Verifica se o conteúdo da variável pode ser chamado como função(callable)
     */
    if (is_callable($method)) {
      call_user_func_array($method, $params);
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
    if (preg_match('/^(([A-Z]{1}[a-z]+)+Controller)@([a-z]{1}[a-zA-Z0-9_-]+)$/', $subject, $variables)) {

      if (!empty($variables[0])) {
        $controller = $variables[1];
        $action = $variables[3];

        return [
          'controller' => "App\\Controllers\\" . $controller,
          'action' => $action
        ];
      }

      return [];

    }

  }

}
