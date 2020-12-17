<?php
/**
 * vendor_name\subNamespace\classe
 */

namespace Core\Router;

use Core\Helpers\Debug;
use Core\Request;
use React\Promise\Util;

class Router
{
  private static $collection;
  private $method;
  private $path;

  public function __construct(Request $request)
  {

    $this->path = $request->getPath();
    $this->method = $request->getMethod();

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


  public static function all(){
    return self::$collection;
  }

  public function loadRoutes(){
    require_once __DIR__.'/../../Config/routes/web.php';
  }


}
