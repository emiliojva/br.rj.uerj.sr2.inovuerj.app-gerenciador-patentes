<?php

namespace Core\Renderer;

use Core\CORS\CorsMiddleware;

interface PHPRendererInterface
{

  public function setCORS(CorsMiddleware $objCors);

  public function setData($data);

  public function run();
  
}
