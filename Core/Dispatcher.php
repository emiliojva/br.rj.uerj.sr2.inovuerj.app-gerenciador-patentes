<?php

namespace Core;

use Core\Helpers\Debug;
use Core\Router\Router;

class Dispatcher
{

  private $_request;
  private $_router;
  private $_active_route;

  public function __construct()
  {

    //    require_once 'core.php';


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

  public function getRouter()
  {
    return $this->_router;
  }

  public function run()
  {
    $result = NULL;

    $arrayAllRoutes = Router::all();

//    Debug::dump($this->_request->getPath(),"rota atual");

    foreach ($arrayAllRoutes as $method => $routes) {

//      Debug::dump($routes,"rotas do method {$method}");

      foreach ($routes as $index => $route) {

        $path = $route[0];
        $callback = $route[1];

//        Debug::dump($route,"rota {$path}");

        $result = $this->checkUrlPath($path);

        if ($result) {
          break; // interrompe loop caso encontre o resultado
        }

      }

    }

    if($result){

      /**
       * Retorna função(controller/action) que deverá ser executado
       * E parametros ja processador por expressão regular nas rotas
       * http://localhost/usuario/{id}/editar
       */
      return [
        'callback' => $callback,
        'params' => $result['params']
      ];

    }




  }

  private function checkUrlPath($toFind)
  {

    /**
     * Escapando barra
     * Se não escapar as barras, a função preg_match
     * processa como expressão regular.
     * Não queremos isso!
     * Queremos comparar a string da rota atual, com uma expressao regular
     * que case com um item array de rotas
     */
    $toFind = str_replace('/', '\/', $toFind);

    /**
     * Verificar se a rota contem parametros
     * Aqui estamos verificando se cadastramos alguma rota com o padrão(pattern) /{id}/
     */
    $url_compilada = preg_replace('/\{[a-zA-Z]+\}/', '([a-zA-Z0-9_-]+)', $toFind);

    /**
     * Padrao que estamos procurando
     */
    $pattern = '/^' . $url_compilada . '$/';

    /**
     * rota atual do navegador
     */
    $subject = $this->_active_route;

    /**
     * Verificar passada casa com a rota atual do navegador
     */
    preg_match($pattern, $subject, $results);


    if($results){

      /**
       * Rota encontra é sempre o primeiro parametro encontrado pelo preg_match
       * Os demais serão os parametros na ordem da esquerda pra direita
       */
      $rota_encontrada = array_shift($results);
      $params = $results;

      return [
        'rota'=>$rota_encontrada,
        'params'=>$params
      ];

    }

  }

}
