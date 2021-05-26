<?php

namespace App\Controllers;

use Core\Controller\ControllerAction;
use Core\Router\Request;

class AdminController extends ControllerAction
{

  /**
   * AdminController constructor.
   */
  public function __construct()
  {
    parent::__construct();
    session_start();
  }

  public function index(Request $request)
  {

    /**
     * Obter usuário autenticado via session method
     */
    $usuario_autenticado = $request->session()->user(null,true);

    /**
     * Dados que serão utilizados como variaveis na view.
     * Neste caso, A variável $usuario_autenticado será disponibilizada, contendo usuario autenticado no momento.
     */
    $dados = array(
      'usuario_autenticado' => $usuario_autenticado
    );

    return $this->render('admin.index', $dados);
    

  }

}
