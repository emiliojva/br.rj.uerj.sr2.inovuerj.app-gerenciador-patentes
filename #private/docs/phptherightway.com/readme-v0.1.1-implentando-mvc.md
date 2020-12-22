# [](#implementando-mvc)Implementando Padrão de Projeto - MVC 

> **Objetivos desta etapa:**
>
> *   Implementação da camada de Aplicação - Classe App(core/app.php) 
> *   Iniciando implementação de um CORE para aplicação
> *   Implementação das camadas Dispatcher, Request, Router e seus fluxos
> *   Iniciar Primeira Camada do MVC. Controller ou Controlador.     

> 
> **Branch**: [rotas](https://)

## Implementação da camada de Aplicação - Classe App(core/app.php)

Nossa camada de arranque do sistema chama-se `App`. Seu construtor inclui nossas funções ajudantes(helpers), define charset e ordena que o despachante inicie os trabalhos de requisições e rotas. 

O Despachante terá a missão de retornar o callback e parametros resolvidos, das rota(se existir). Feito isto, precisamos `resolver` como invocar o método passado, seja ele uma função ou uma classe. Chamamos de Action, a função final do fluxo de um controlador. `Resolver` é um padrão que implementamos em uma classe Resolver, que determina o que 


    <?php
    
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
        $this->_dispatcher = new \Core\Dispatcher();
    
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
        // ver codigo fonte em /Core/App.php
      }
    
    }



## [](#iniciando-core)Iniciar implementação de um CORE para aplicação
![Fluxo circle MVC](https://miro.medium.com/max/1225/1*gRErOZyn7ptn373U9fv0Yg.png "Arquitetura Global")

Todas as camadas no Core do sistema, demonstradas no fluxo da arquitetura global, são implementadas como classes. 

O código fonte, está localizado no caminho ou namespace `/Core`. 

A ideia deste namespace(Core), é gerar um pacote próprio, que possa ser reinstalado em outros projetos, usando composer. Aprenderemos criar nosso próprio package, mas adiante. 


## Implementação das camadas Dispatcher, Request, Router e seus fluxos

### Dispatcher

Camada "despachante", reponsável por entregar para a camada controller(controlador), todo processamento da aplicação, desde o tratamento das rotas e o tipo de requisição(post,get) que será executado dentro de uma action ou função anonima(closure).

O Código abaixo implementa uma instancia de Request e outra de Router. O necessário para que as requisições e verbos Http sejam identificados e passadas para o controlador. O métod `run` é quem faz toda a mágica pra identificar se nossas rotas são para funções anomimas(closures), OU para uma Classe Controller com seu método Action, presente em Router::get() por exemplo.  

    <?pwhp
    
    namespace Core\Router
    
    use Core\Helpers\Debug;
    use Core\Router\Router;
    
    class Dispatcher
    {
    
      /**
       * representa as requisições web da aplicação
       * @var Request
       */
      private $_request;
    
      /**
       * Representa a coleção de rotas da aplicação
       * @var Router
       */
      private $_router;
    
      /**
       * Representa a rota atual na barra de endereço ou recurso
       * @var mixed|string
       */
      private $_active_route;
    
      public function __construct()
      {
    
        /**
         * Instancia de uma Requisição
         */
        $this->_request = new Request();
    
        /**
         * Instancia do roteador
         */
        $this->_router = new Router($this->_request);
    
        /**
         * Carregar Rotas
         */
        $this->_router->loadRoutes();
    
        /**
         * Rota atual da address bar
         */
        $this->_active_route = $this->_request->getPath();
    
      }
    
      /**
       * Instancia de um roteador
       * @return Router
       */
      public function getRouter()
      {
        return $this->_router;
      }
    
      /**
       * Executa o despachante mediante a captura do verbo http e array de rotas
       * Retornando `callback` e `params` encontrados
       * @return array
       */
      public function run()
      {
        // ver no codigo fonte em Core/Router/Dispatcher
      }
    
      /**
       * Valida se é igual a rota da barra de endereço
       * Retorna resultado com a rota encontrada e parametros encontrados
       * @param $toFind
       * @return array
       */
      private function checkUrlPath($toFind)
      {
        // ver no codigo fonte em Core/Router/Dispatcher
      }
    
    }


#### Request

Dados são trocados entre servidor e cliente por meio de mensagens HTTP. Há dois tipos de mensagens: requisições (requests) enviadas pelo cliente para disparar uma ação no servidor, e respostas (responses), a réplica do servidor.

Mensagens HTTP são compostas de informação textual codificada em ASCII, e se espalham por multiplas linhas. Em HTTP/1.1, e versões anteriores do protocolo, estas mensagens eram abertamente enviadas através da conexão. Em HTTP/2, a mensagem antes legível por humanos é agora dividida em quadros HTTP, resultando em otimização e melhora de desempenho.

Desenvolvedores Web, ou webmasters, raramente lidam com essas mensagens textuais diretamente: um programa, um navegador, um proxy, ou um servidor Web, executam essa ação. Eles proveem mensagens HTTP por meio de arquivos de configuração (para  proxys ou servidores), APIs (para navegadores) ou outras interfaces.

    <?php
        
        namespace Core\Router
        
        class Request
        {
          public $url;
          private $_method;
        
          public function __construct()
          {
            $this->url = $_SERVER["REQUEST_URI"];
            $this->_method = self::method();
          }
        
          public function getPath()
          {
           return self::uri();
          }
        
          public function getBaseUrl()
          {
            return self::baseUrl();
          }
        
          public function getMethod()
          {
            return self::method();
          }
        
          public static function uri() 
          { 
            // ver no codigo fonte
          }
        
          public static function baseUrl()
          {
            $startUrl = strlen($_SERVER["DOCUMENT_ROOT"]);
            return substr($_SERVER["SCRIPT_FILENAME"], $startUrl, -9);
          }
        
          public static function method()
          {
            return empty($_SERVER['REQUEST_METHOD']) ? 'GET' : $_SERVER['REQUEST_METHOD'];
          }
    
        }

#### Router 

Todo o trabalho de armazenar nossas rotas e pra quais verbos elas serão direcionadas, ficam com o `Router`. Aqui é o repositório de tudo que preenchemos no caminho /Config/routes/web.php.

    <?php
    
    namespace Core\Router;
    
    use Core\Request;
    use React\Promise\Util;
    
    class Router
    {
      private static $collection;
      public static $request;
      private $method;
      private $path;
    
    
      public function __construct(Request $request)
      {
    
        $this->path = $request->getPath();
        $this->method = $request->getMethod();
    
        self::$request = $request;
    
        if (!is_string($this->path)) {
          throw new \Exception("\$path precisa ser do tipo string");
        }
    
      }
    
      public static function get($path, $fn)
      {
        self::request('GET', $path, $fn);
      }
    
      public function post($path, $fn)
      {
        self::request('POST', $path, $fn);
      }
    
      private static function request($method, $path, $fn)
      {
        self::$collection[$method][] = [$path, $fn];
      }
    
    
      public static function getAllByMethod($method = 'GET'){
    
        if(!isset(self::$collection[$method]))
          die('erro ao localizar metodo http');
    
        return self::$collection[$method];
    
      }
    
      public function loadRoutes(){
        require_once __DIR__.'/../../Config/routes/web.php';
      }
    
    
    }


Este **Core**, ainda está em sua versão básica. Ainda implementaremos por exemplo, tratamento de sessions, cookies, variáveis de ambiente, server e outros temas que aprenderemos
