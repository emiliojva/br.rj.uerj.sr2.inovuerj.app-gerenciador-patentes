<?php
/**
 * vendor_name\subNamespace\classe
 */

namespace Core\Router;

class Router
{
  private static $collection;
  public static $request;
  private static $mode;
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
    if(self::$mode === 'api'){
      self::$collection[$method]['api'][] = [$path, $fn];  
    } else {
      self::$collection[$method]['web'][] = [$path, $fn];
    }
  }


  public static function getAllByMethod($method = 'GET'){

    $mode_currently = Request::getRouterMode();

    if(!isset(self::$collection[$method][$mode_currently]))
      die('Error! Method Http does not located');

    return self::$collection[$method][$mode_currently];

  }

  /**
   * Load all maps according to request types (HTTP, API)
   *
   * @return void
   */
  public function loadRoutes()
  {
    
    /**
     * Map Routes to HTTP requests
     */
    self::setMode('web');
    require_once __DIR__.'/../../Config/routes/web.php';

    /**
     * Map Routes to API requests
     */
    self::setMode('api');
    require_once __DIR__.'/../../Config/routes/api.php';
    
  }

  public static function setMode($flag){
    self::$mode = $flag;
  }

}
