<?php

namespace App\Controllers\Api;

use Core\Controller\ControllerAction;
use Core\Router\Request;

/**
 * Classe Controller para lidar com recursos dos ativos(Booty)
 */
class IntellectualAssetController extends ControllerAction
{

  public function __construct(){
    session_start();
  }

  public function store(Request $request)
  {
    
    $request->post('data.intelectual_assets.name');

    return [
      '_body'=> ['data'=> [1,2,3,"maria"]],
      'msg'=>'bunda-le-le'
    ];
  }

}
