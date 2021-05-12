<?php
/**
 * Created by PhpStorm.
 * User: Administrador
 * Date: 10/24/2020
 * Time: 10:21 PM
 */

namespace Core\CORS;

use mysql_xdevapi\Exception;

Class CorsMiddleware
{

  public $httpCurrentOrigin = '';
  public $httpCurrentRequestMethod = ''; // $_SERVER[REQUEST_METHOD] = GET,POST,PUT,DELETE,OPTIONS

//  private $_array_origin_url_allowed = [];
  private $_array_allow_methods = [];
  private $_array_allow_headers = [];
  private $_max_age = 0;
  private $_content_type  = '';
  private $_pragma  = 'no-cache';
  private $_cache_control  = 'no-cache';
  private $_content_length  = 0;

  public function __construct(
//    array $array_origin_url_allowed
  )
  {


    /**
     * Capturar origem http requisicao
     */
    if(isset($_SERVER['HTTP_ORIGIN'])){
      $this->httpCurrentOrigin = $_SERVER['HTTP_ORIGIN'];
    }

    if(isset($_SERVER['REQUEST_METHOD'])){
      $this->httpCurrentRequestMethod = $_SERVER['REQUEST_METHOD'];
    }

//    var_dump( isset($_SERVER['HTTP_ORIGIN']) ); die;

//    $this->_array_origin_url_allowed = $array_origin_url_allowed;
  }

  /**
   * 'origin' => '*',    // Wide Open!
   * @param array $origin
   */
//  public function setOriginUrlsAllowed(array $origin)
//  {
//    $this->_array_origin_url_allowed = $origin;
//    return $this;
//  }
  public function getOriginUrlsAllowed()
  {

//    if (!in_array($this->httpCurrentOrigin, $this->_array_origin_url_allowed)) {
//      exit('Acesso não permitido');
//    }

    @header("Access-Control-Allow-Origin: {$this->httpCurrentOrigin}");

  }

  public function setMaxAge($max_age)
  {

    $this->_max_age = $max_age;

    return $this;
  }
  public function getMaxAge()
  {
    if($this->_max_age){
      @header("Access-Control-Max-Age: {$this->_max_age}");
    }

  }

  public function setAllowCredentials($flag = true)
  {
    $this->_bool_allow_credentials = $flag;
    return $this;
  }
  public function getAllowCredentials()
  {
    if ($this->_bool_allow_credentials === True)
      @header('Access-Control-Allow-Credentials: true');
  }

  /**
   * 'allowMethods' => 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
   * @param $array_allow_methods
   * @return $this
   */
  public function setAllowMethods($array_allow_methods)
  {
      $this->_array_allow_methods = $array_allow_methods;
      return $this;
  }
  public function getAllowMethods()
  {

    if (is_array($this->_array_allow_methods)){
      $allowMethods = implode(", ", $this->_array_allow_methods);
      @header("Access-Control-Allow-Methods: {$allowMethods}");
    } else {
      @header("Access-Control-Allow-Methods: OPTIONS");
    }

  }

  /**
   * 'allowHeaders' => 'Content-Type, Origin',
   * @param array $array_allow_headers
   */
  public function setAllowHeaders(array $array_allow_headers)
  {
    $this->_array_allow_headers = $array_allow_headers;
    return $this;
  }
  public function getAllowHeaders()
  {
    if (is_array($this->_array_allow_headers) && count($this->_array_allow_headers)){
      $allowHeaders = implode(", ", $this->_array_allow_headers);

      @header("Access-Control-Allow-Headers: {$allowHeaders}");


    } else // Otherwise, use request headers
    {
      @header("Access-Control-Request-Headers");
    }



  }

  public function addOriginUrlsAllowed($origin_url_allowed)
  {
    $this->array_origin_url_allowed[] = $origin_url_allowed;
  }

  protected function setExposeHeaders()
  {
    $exposeHeaders = $this->settings->exposeHeaders;

    if (is_array($exposeHeaders))
      $exposeHeaders = implode(", ", $exposeHeaders);

    @header('Access-Control-Expose-Headers', $exposeHeaders);

  }


  public function setContentType($content_type = 'application/json')
  {
    $this->_content_type = $content_type;
    return $this;

  }
  public function getContentType()
  {
    if($this->_content_type){
      @header("Content-Type: {$this->_content_type}");
    }

  }


  public function setPragma($pragma)
  {
    $this->_pragma = $pragma;
    return $this;

  }
  public function getPragma()
  {
    if($this->_pragma){
      @header("Pragma: {$this->_pragma}");
    }

  }

  public function setCacheControl($pragma)
  {
    $this->_cache_control = $cache_control;
    return $this;

  }
  public function getCacheControl()
  {
    if($this->_cache_control){
      @header("Cache-Control: {$this->_cache_control}");
    }

  }

  public function setContentLength($content_length)
  {
    if(!is_numeric($content_length)){
      throw new Exception('Precisa ser um inteiro');
    }

    $this->_content_length = $content_length;
    return $this;

  }
  public function getContentLength()
  {
    @header("Content-Length: {$this->_content_length}");
  }


  /**
   * @return bool
   */
  public function isOptionRequest(){
    return $this->httpCurrentRequestMethod === 'OPTIONS';
  }

  /**
   * @return bool
   */
  public function isPostRequest(){
    return $this->httpCurrentRequestMethod === 'POST';
  }

  public function isGetRequest(){
    return $this->httpCurrentRequestMethod === 'GET';
  }

  /**
   * Executa dos os procedimentos do cabeçalho de autorização (HEADER)
   */
  public function run(){

    if($this->hasOriginDifferent()){

      if($this->isGetRequest() || $this->isPostRequest()){

        $this->getOriginUrlsAllowed();
        $this->getContentType();
        $this->getAllowMethods();
        $this->getAllowHeaders();
        $this->getAllowCredentials();
        $this->getMaxAge();
        $this->getPragma();
        $this->getCacheControl();

      }

      /**
       * OPTIONS pre requests
       */
      if($this->isOptionRequest()){
        $this->getOriginUrlsAllowed();
        $this->getContentType();
        $this->setAllowMethods(['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'])->getAllowHeaders();
        $this->setAllowCredentials('TRUE')->getAllowCredentials();
        $this->setAllowHeaders(['Content-Type', 'X-Requested-With', 'Access-Control-Allow-Headers', 'Authorization', 'X-Requested-With'])->getAllowHeaders();
//        $this->setMaxAge(3600)->getMaxAge();
        $this->getPragma();
        $this->getCacheControl();
//        $this->getContentLength();
      }

    }
  }


  /**
   * Verifica se tem origin diferente do servidor(host)
   * @return bool
   */
  private function hasOriginDifferent(){
    if (isset($_SERVER['HTTP_ORIGIN'])) {
      if ($_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] !== $_SERVER['HTTP_ORIGIN']) {
        return true;
      }
    }
    return false;
  }

}






//public function open(array $originUrlsAllowed = array())
//{
//
//  if (isset($_SERVER['HTTP_ORIGIN'])) {
//
//
//    if ($_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] !== $_SERVER['HTTP_ORIGIN']) {
//
//      /**
//       * Capturar origem
//       */
//      $httpCurrentOrigin = $_SERVER['HTTP_ORIGIN'];
//
//      /**
//       * Verificar se ha permissao
//       */
//      if (!in_array($httpCurrentOrigin, $originUrlsAllowed)) {
//        exit('Acesso não permitido');
//      }
//
//      if ($_SERVER['REQUEST_METHOD'] == "GET") {
//
//        header("Access-Control-Allow-Origin: {$httpCurrentOrigin}");
//        header('Access-Control-Allow-Methods: GET, OPTIONS');
//        header("Access-Control-Allow-Headers: Content-Type, X-Requested-With, Access-Control-Allow-Headers, Authorization, X-Requested-With");
//        header("Content-Type: application/json");
//        header('Pragma: no-cache');
//        header('Cache-Control: no-cache');
//
//      } elseif ($_SERVER['REQUEST_METHOD'] == "POST") { // POST
//
//        // required headers
//        header("Access-Control-Allow-Origin: {$httpCurrentOrigin}");
//        header('Access-Control-Allow-Credentials: true'); // Authorization
//        header('Access-Control-Allow-Methods: POST, OPTIONS');
//        header("Access-Control-Allow-Headers: Content-Type, X-Requested-With, Access-Control-Allow-Headers, Authorization, X-Requested-With");
//        header("Content-Type: application/json");
//        header('Pragma: no-cache');
//        header('Cache-Control: no-cache');
////      header("Access-Control-Max-Age: 3600");
//
//
//      } elseif ($_SERVER['REQUEST_METHOD'] == "OPTIONS") {
//
//        // Tell the Client this preflight holds good for only 20 days
//        if ($_SERVER['HTTP_ORIGIN'] == $httpCurrentOrigin) {
//
//          header("Access-Control-Allow-Origin: {$httpCurrentOrigin}");
//          header("Content-Type: application/json");
//          header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
//          header('Access-Control-Allow-Credentials: true');
//          header("Access-Control-Allow-Headers: Content-Type, X-Requested-With, Access-Control-Allow-Headers, Authorization, X-Requested-With");
//
//          header('Pragma: no-cache');
//          header('Cache-Control: no-cache');
////        header("Access-Control-Max-Age: 3600");
//          header("Content-Length: 0");
//
//        } else {
//          header("HTTP/1.1 403 Access Forbidden");
//          header("Content-Type: application/json");
//          echo "You cannot repeat this request";
//        }
//      } else {
//        die("This HTTP Resource can ONLY be accessed with GET or OPTIONS");
//      }
//
//
//    }
//
//  } else {
//
//    /**
//     * Mesma origem
//     */
//    if (empty($_SERVER['HTTP_ORIGIN'])) {
//      return true;
//    }
//
//  }
//
//}
