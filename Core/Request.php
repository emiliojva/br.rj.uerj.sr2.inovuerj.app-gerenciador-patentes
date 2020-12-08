<?php

namespace Core;

class Request
{
  public $url;

  public $method = 'GET'; // default web

  public function __construct()
  {
    $this->url = $_SERVER["REQUEST_URI"];

    $this->method = empty($_SERVER['REQUEST_METHOD']) ? /* nothing do to */ : $_SERVER['REQUEST_METHOD'];

  }

  /**
   * Retorna URI atual
   * @return mixed|string
   */
  public function getUri()
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

    $uri = str_replace($this->getBaseUrl(), '', $path);

//        $parse = parse_url($path, PHP_URL_PATH);
//        var_dump($uri);
//        die;

    if (!preg_match('/^\//', $uri, $variables)) {

      $uri = '/' . $uri;
    }

    return $uri;

  }

  private function getBaseUrl()
  {
    $startUrl = strlen($_SERVER["DOCUMENT_ROOT"]);
    return substr($_SERVER["SCRIPT_FILENAME"], $startUrl, -9);
  }



}
