<?php

namespace Core\Router;

use Core\Http\SessionManipulation;
use GuzzleHttp\Client;
use Zend\Diactoros\Response;

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

  public static function siteURL()
  {
    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
    $domainName = $_SERVER['HTTP_HOST'].'/';
    return $protocol.$domainName;
  }

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

  /**
   * Get Session Object
   *
   * @return SessionManipulation|null
   */
  public function session()
  {
    return SessionManipulation::getInstance();
  }

  public function user()
  {
    return $this->session()->user();
  }

  public function post($input = null)
  {

    if(!empty($_POST)){

      $_POST = filter_var($_POST, \FILTER_CALLBACK, ['options' => 'sanitize']);

      if(!empty($input)){
        $array_by_dot = explode('.',$input);
        return flatCall($_POST, $array_by_dot);
      }
      
    }
    return $_POST;
  }

  public function toArray()
  {
    // return $this->
  }

  /**
   * Check request is ajax
   *
   * @return boolean
   */
  public static function isAjax()
  {
    
    /**
     * Check param HTTP_X_REQUESTED_WITH captured from SERVER PHP
     */
    $x_requested = (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest');

    // dd(!empty($_SERVER['HTTP_X_REQUESTED_WITH']));

    if ( $x_requested )
    {
      # Ex. check the query and serve requested data
      return TRUE;
    }

    $isCors = self::isCORS();

    /**
     * Not Same origin agent/client Or CORS mode enable
     */
    if($isCors){
      return TRUE;
    }

    /**
     * It's not AJAX
     */
    return FALSE;
  }

  /**
   * Returns name from host machine currently
   *
   * @return string|void
   */
  public static function getHostname()
  {
    return gethostbyaddr($_SERVER['REMOTE_ADDR']) . self::baseUrl();
  }

  /**
   * Returns address of internet protocol (IP) from host currently
   *
   * @return void
   */
  public static function getIp()
  {
    return gethostbyname(self::getHostname());
  }

  /**
   * Return if origin request is same
   *
   * @return boolean
   */
  public static function isSameOrigin(){

    /**
     * if isset HTTP_ORIGIN -> Request is AJAX or CORS
     * HTTP_REFERER show request from different origin
     */
    if(isset($_SERVER['HTTP_ORIGIN']) && ($_SERVER['HTTP_ORIGIN'] === $_SERVER['HTTP_REFERER']) ){
      return TRUE;
    }

    /**
     * In some cases, PHP captures this way
     * !!It varies from server to server.!!
     */
    if(!empty($_SERVER['HTTP_SEC_FETCH_SITE']) && strtolower($_SERVER['HTTP_SEC_FETCH_SITE']) === 'same-origin' ){
      return TRUE;
    }

    /**
     * By default, when HTTP_ORIGIN is not defined 
     * IS ALWAYS THE SAME ORIGIN OF REQUEST
     */
    if(!isset($_SERVER['HTTP_ORIGIN'])){
      return TRUE;
    }
    
    /**
     * Is not same origin
     */
    return FALSE;

  }

  public static function getContentType(){

    if(!empty($_SERVER['CONTENT_TYPE'])){
      return $_SERVER['CONTENT_TYPE'];
    }

    return NULL;

  }

  public static function getIpPort(){

    if(!empty($_SERVER['SERVER_PORT'])){
      return $_SERVER['SERVER_PORT'];
    }

    return NULL;

  }


  /**
   * Returns check is conection is Access-Control-Allow-Origin. The Sec-Fetch-Mode fetch metadata header indicates the request's mode.
   * CORS - Cross-Origin Resource Sharing (CORS)
   * @link https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS
   *  
   *
   * @return boolean
   */
  public static function isCORS(){

    if(!empty($_SERVER['HTTP_SEC_FETCH_MODE'])){
      return strtolower($_SERVER['HTTP_SEC_FETCH_MODE']) === 'cors';
    }
    return FALSE;

  }


  /**
   * Mode environment web requested
   * 
   *
   * @return string|void "web|api"
   */
  public static function getRouterMode()
  {
    $defaultMode = 'web';

    if(Request::isAjax()){
      $defaultMode = 'api';
    } 



    return $defaultMode;
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

//        $parse = parse_url($path, PHP_URL_PATH);
//        var_dump($uri);
//        die;

