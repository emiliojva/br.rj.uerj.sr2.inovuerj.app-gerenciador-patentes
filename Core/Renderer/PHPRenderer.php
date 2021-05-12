<?php

namespace Core\Renderer;

use Core\CORS\CorsMiddleware;

class PHPRenderer implements PHPRendererInterface
{

  private $data;
  /**
   * @var $cors CorsMiddleware
   */
  private $cors = null;

  public function __construct()
  {

  }

  public function setData($data)
  {
    $this->data = $data;


    /**
     * HEADER MODIFICADO PARA ATENDER REQUISICOES DE 'ORIGINS' DIFERENTES
     */
    if (!is_null($this->cors)) {
      $this->cors->run();
    }

  }

  

  public function run()
  {
    if (is_string($this->data)) {
      @header('Content-type: text/html; charset=UTF-8');
      echo $this->data;
      exit;
    }

    if (is_array($this->data)) {
      @header('Content-type: application/json');
      echo json_encode($this->data);
      exit;
    }
    
    throw new \Exception('Route is invalid !');
  }

  /**
   * @param CorsMiddleware
   */
  public function setCORS(CorsMiddleware $objCors)
  {
    $this->cors = $objCors;
  }

}
