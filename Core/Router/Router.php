<?php
/**
 * vendor_name\subNamespace\classe
 */

namespace Core\Router;

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
