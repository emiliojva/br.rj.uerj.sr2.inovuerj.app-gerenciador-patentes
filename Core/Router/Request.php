<?php

namespace Core\Router;

use Core\Http\SessionManipulation;

class Request
{
  public $url;

  private $_method;

  public function __construct()
  {
    $this->url = $_SERVER["REQUEST_URI"];

    $this->_method = self::method();

  }

  public function getPath(){
   return self::uri();
  }

  public function getBaseUrl(){
    return self::baseUrl();
  }

  public function getMethod(){
    return self::method();
  }

  /****************************/
  /***********FACADES**********/
  /****************************/

  /**
   * Retorna URI atual
   * @return mixed|string
   */
  public static function uri()
  {
    $path = "";
    if (!empty($_SERVER['REQUEST_URI'])) {
      $path = urldecode($_SERVER['REQUEST_URI']);
    }

    if (!empty($_SERVER['PATH_INFO'])) {
      $path = $_SERVER['PATH_INFO'];
    } else if (!empty($_SERVER['REDIRECT_URL'])) {
      $path = $_SERVER['REDIRECT_URL'];
    } else {
      $path = "/";
    }

    // $uri = str_replace(self::baseUrl(), '', $path);
    $uri = $path;

//        $parse = parse_url($path, PHP_URL_PATH);
//        var_dump($uri);
//        die;

    if (!preg_match('/^\//', $uri, $variables)) {

      $uri = '/' . $uri;
    }

    return $uri;

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


  public function session(){
    return SessionManipulation::getInstance();
  }

  public function post($input = null){

    if(!empty($_POST)){

      // FILTER_SANITIZE_ENCODED
      $inputs_filtered = $this->filter_input_array_with_default_flags(INPUT_POST, FILTER_SANITIZE_ENCODED,NULL);
      return is_null($input) ? $inputs_filtered : $inputs_filtered[$input];
    }
    
  }

  private function filter_input_array_with_default_flags($type, $filter, $flags, $add_empty = true) {
    $loopThrough = array();
    switch ($type) {
        case INPUT_GET : $loopThrough = $_GET; break;
        case INPUT_POST : $loopThrough = $_POST; break;
        case INPUT_COOKIE : $loopThrough = $_COOKIE; break;
        case INPUT_SERVER : $loopThrough = $_SERVER; break;
        case INPUT_ENV : $loopThrough = $_ENV; break;
    }
  
    $args = array();
    foreach ($loopThrough as $key=>$value) {
        $args[$key] = array('filter'=>$filter, 'flags'=>$flags);
    }
   
    return filter_input_array($type, $args, $add_empty);
  }

}
