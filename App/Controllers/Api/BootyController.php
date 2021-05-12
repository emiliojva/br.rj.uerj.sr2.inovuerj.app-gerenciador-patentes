<?php

namespace App\Controllers\Api;

use Core\Controller\ControllerAction;
use Core\Router\Request;

/**
 * Classe Controller para lidar com recursos dos ativos(Booty)
 */
class BootyController extends ControllerAction
{

  public function __construct(){
    session_start();
  }

  public function store(Request $request)
  {
    return [
      '_body'=> ['data'=> [1,2,3,"maria"]],
      'msg'=>'bunda-le-le'
    ];
  }

}
