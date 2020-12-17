<?php

namespace Core;

use Core\Router\Router;
use Core\Helpers\Debug;

class Dispatcher
{

  private $_request;
  private $_router;

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
    $this->_router  = new Router($this->_request);

    /**
     * Carregar Rotas
     */
    $this->_router->loadRoutes();

  }

  public function getRouter(){
    return $this->_router;
  }

  public function run()
  {
    $arrayAllRoutes = Router::all();

    Debug::dump($this->_request->getPath(),"rota atual");

    foreach ($arrayAllRoutes as $method=>$routes){

      Debug::dump($routes,"rotas do method {$method}");

      foreach ($routes as $index=>$route){

        $path = $route[0];
        $fn = $route[1];

        Debug::dump($route,"rota {$path}");

        $result = $this->checkUrlPath($route[0]);

        if($result){
          break;
        }


      }

    }


//    Helpers\Debug::dd(Router::all());
  }

  private function checkUrlPath($toFind){

    if($this->_request->getPath() === $toFind){
      echo "<strong>Rota atual => {$toFind} </strong>";
      echo "<br>";
    }



  }

}
