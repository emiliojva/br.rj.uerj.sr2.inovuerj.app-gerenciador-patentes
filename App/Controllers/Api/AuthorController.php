<?php

namespace App\Controllers\Api;

use Core\Controller\ControllerAction;
use Core\Router\Request;
use Core\ADO\TDatabase as DB;  

/**
 * Classe Controller para lidar com recursos dos ativos(Booty)
 */
class AuthorController extends ControllerAction
{

  public function __construct(){
    session_start();
  }

  public function store(Request $request)
  {
    dd($request->toArray());
  }

  public function update(Request $request,$id)
  {
  }

}
