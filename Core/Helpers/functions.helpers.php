<?php
/**
 * Created by PhpStorm.
 * User: Administrador
 * Date: 12/18/2020
 * Time: 8:18 PM
 */

// namespace Core\Helpers;

function redirect($caminho){
  header("Location: {$caminho}");
}

if (!function_exists('siteURL')) {

  function siteURL(){
    return call_user_func_array('\Core\Router\Request::siteURL', func_get_args());  
  }

}

/**
 * Helper(ajudante) para instanciar a engine de templates Plates
 * Renderizar para tela a view e seu template pai(layout)
 * @param $view
 * @param $params
 */
function view(){
  return call_user_func_array('\Core\Controller\ControllerAction::view', func_get_args());
}

if (!function_exists('dump')) {
  function dump(){
    call_user_func_array('\Core\Helpers\Debug::dump', func_get_args());
  }
}

if (!function_exists('dd')) {
  function dd(){
    call_user_func_array('\Core\Helpers\Debug::dd', func_get_args());
  }
}

/**
 * Busca um valor em um array muldimensional atraves de um array unidimensional fornecido como segundo parametro
 *
 * @param [type] $data_arr
 * @param [type] $data_arr_call
 * @return void
 */
function flatCall($data_arr, $data_arr_call){
  $current = $data_arr;
  foreach($data_arr_call as $key){
      $current = $current[$key];
  }
  return $current;
}

/**
 * Remove spaces and converts empty string to NULL
 *
 * @param string $x
 * @return void
 */
function sanitize($x){
  if(strlen($x)==0){   $x = NULL;  } else {    
    $x = filter_var($x,FILTER_SANITIZE_STRING);
    $x = trim($x);  
  }  
  return $x;
}

if(!function_exists('removeAcentos')){
  function removeAcentos($string)
  {
      $string = preg_replace("/[áàâãä]/u", "a", $string);
      $string = preg_replace("/[ÁÀÂÃÄ]/u", "A", $string);
      $string = preg_replace("/[éèê]/u", "e", $string);
      $string = preg_replace("/[ÉÈÊ]/u", "E", $string);
      $string = preg_replace("/[íì]/u", "i", $string);
      $string = preg_replace("/[ÍÌ]/u", "I", $string);
      $string = preg_replace("/[óòôõö]/u", "o", $string);
      $string = preg_replace("/[ÓÒÔÕÖ]/u", "O", $string);
      $string = preg_replace("/[úùü]/u", "u", $string);
      $string = preg_replace("/[ÚÙÜ]/u", "U", $string);
      $string = preg_replace("/ç/u", "c", $string);
      $string = preg_replace("/Ç/u", "C", $string);
      return $string;
  }
}


if(!function_exists('curlApiGetSSL')){

  /**
   * Allow Curl into endpoints protected for SSL connections
   * @depends extension ext-curl ext-simplexml
   * sudo apt-get install -y php-curl php-simplexml
   *
   * @param [type] $url
   * @return void
   */
  function curlApiGetSSL($url)
  {

    // $url = 'http://inovuerj.sr2.uerj.br/desenvolvimento/secti/api/v1/instituicoes';
    //    $url = 'https://www.rcforms.lcc.ime.uerj.br/~fabio/api/';
    $response = [];

    /**
     * https://packagist.org/packages/php-curl-class/php-curl-class#8.8.0
     */
    $curl = new \Curl\Curl();
    $curl->disableTimeout();
    $curl->setHeader('X-Requested-With', 'XMLHttpRequest');
    $curl->setOpt(CURLOPT_SSL_VERIFYHOST, 0); // PARA DE VERIFICAR SSL NO HOST
    $curl->setOpt(CURLOPT_SSL_VERIFYPEER, 0); // PARA DE VERIFICAR SSL NO TARGET
    $curl->setOpt(CURLOPT_CAINFO, 'cacert-2020-01-01.pem');
    $curl->setOpt(CURLOPT_CAPATH, 'cacert-2020-01-01.pem');
    $curl->get($url);

    if ($curl->error) {
      return 'Error: ' . $curl->errorCode . ': ' . $curl->errorMessage . "\n";
    }

    // $arr_rows = (array)$curl->response;
    return $curl->response;
  }

  /**
   * @uses
   * Curl Get de URL com Certificados SSL negados
   */
  // $url_parse = "https://nominatim.openstreetmap.org/search.php?q={$query}&polygon_geojson=1&format=json";
  // $arr_rows = $this->curlApiGetSSL($url_parse);


}

