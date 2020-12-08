<?php

namespace Core;

class Dispatcher
{

  private $request;

  public function __construct()
  {
    require_once 'core.php';

    $this->request = new Request();

    $this->router  = new Router();

  }

  public function run()
  {
    echo $this->request->getUri();
  }

}
