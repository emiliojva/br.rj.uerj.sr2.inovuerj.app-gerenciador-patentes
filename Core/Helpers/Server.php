<?php
/**
 * Created by PhpStorm.
 * User: Berguerians
 * Date: 6/4/2020
 * Time: 6:15 PM
 */

namespace Core\Helpers;

final class Server
{

  public static function getHttpOrigin()
  {
    if (isset($_SERVER['HTTP_ORIGIN'])) {
      return $_SERVER['HTTP_ORIGIN'];
    }
    return NULL;
  }

  public static function getIP()
  {
    if ($_SERVER['REMOTE_ADDR']) {

      $ip = $_SERVER['REMOTE_ADDR'];

      return $ip;
    }

    return NULL;
  }

  public static function getUserIP()
  {
    // Get real visitor IP behind CloudFlare network
    if (isset($_SERVER["HTTP_CF_CONNECTING_IP"])) {
      $_SERVER['REMOTE_ADDR'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
      $_SERVER['HTTP_CLIENT_IP'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
    }
    $client = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote = $_SERVER['REMOTE_ADDR'];

    if (filter_var($client, FILTER_VALIDATE_IP)) {
      $ip = $client;
    } elseif (filter_var($forward, FILTER_VALIDATE_IP)) {
      $ip = $forward;
    } else {
      $ip = $remote;
    }

    return $ip;
  }

  /**
   * get access token from header
   * */
  public static function getBearerToken()
  {
    $headers = self::getAuthorizationHeader();
    // HEADER: Get the access token from the header
    if (!empty($headers)) {
      if (preg_match('/Bearer\s(\S+)/', $headers, $matches)) {
        return $matches[1];
      }
    }
    return null;
  }

  /**
   * Get header Authorization
   * */
  public static function getAuthorizationHeader()
  {
    $headers = null;
    if (isset($_SERVER['Authorization'])) {
      $headers = trim($_SERVER["Authorization"]);
    } else if (isset($_SERVER['HTTP_AUTHORIZATION'])) { //Nginx or fast CGI
      $headers = trim($_SERVER["HTTP_AUTHORIZATION"]);
    } elseif (function_exists('apache_request_headers')) {
      $requestHeaders = apache_request_headers(); // Fetches all HTTP request headers from the current request
      // Server-side fix for bug in old Android versions (a nice side-effect of this fix means we don't care about capitalization for Authorization)
      $requestHeaders = array_combine(array_map('ucwords', array_keys($requestHeaders)), array_values($requestHeaders));
      //print_r($requestHeaders);
      if (isset($requestHeaders['Authorization'])) {
        $headers = trim($requestHeaders['Authorization']);
      }
    }
    return $headers;
  }

  /**
   * CORS ALL REQUEST PRE-REQUEST OPTIONS
   * LIDAR COM ORIGINS DIFERENTES (API)
   */
  public static function allowAllOriginsRequest($originsAllowed)
  {

    // Allow from any origin PRE-TEST
    if (isset($_SERVER['HTTP_ORIGIN'])) {

      $httpScheme = isset($_SERVER['REQUEST_SCHEME']) ? $_SERVER['REQUEST_SCHEME'] . '://' : 'http://';

      if ($httpScheme . $_SERVER['HTTP_HOST'] !== $_SERVER['HTTP_ORIGIN']) {


        if (in_array($_SERVER['HTTP_ORIGIN'], $originsAllowed)) {
          $ORIGIN = $_SERVER['HTTP_ORIGIN'];
        }

        header("Access-Control-Allow-Origin: {$ORIGIN}");
        header('Access-Control-Allow-Credentials: true');
//      header('Access-Control-Max-Age: 86400');    // cache for 1 day

        /**
         * Para Methodos post, put ou delete navegadores reivindicam o acesso ao method options primeiro
         * Access-Control headers are received during OPTIONS requests -
         * preflight request
         */
        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

          /**
           * O cabeçalho de requisição Access-Control-Request-Method é usado pelos navegadores quando executando uma preflight request, para deixar o servidor
           * sabendo quais métodos HTTP vão ser usados quando a requisição verdadeira for feita. Este cabeçalho é necessário como toda requisição pré-vôo é um
           * OPTIONS e não usa o mesmo método na requisição verdadeira.
           */
          if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
//
          if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

          exit(0);

        }

      }
    }

  }
}

