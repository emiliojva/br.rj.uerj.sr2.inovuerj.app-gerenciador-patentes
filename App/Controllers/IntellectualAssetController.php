<?php

namespace App\Controllers;


use Core\Controller\ControllerAction;
use Core\Router\Request;

/**
 * Classe Controller para lidar com recursos dos ativos(Booty)
 */
class IntellectualAssetController extends ControllerAction
{

  public function __construct()
  {
    session_start();
  }

  public function index()
  {
    /**
     * Uso do ponto para melhorar a aparencia da hierarquida de pastas
     * Neste exemplo a nossa view está no caminho App/Views/usuario/editar.php, definido no primeiro parametro
     *
     * As variaveis que serão visiveis a view são passadas por array no segundo parametro
     */
    return view('assets.index', []);

  }

  public function create()
  {
    /**
     * Uso do ponto para melhorar a aparencia da hierarquida de pastas
     * Neste exemplo a nossa view está no caminho App/Views/usuario/editar.php, definido no primeiro parametro
     *
     * As variaveis que serão visiveis a view são passadas por array no segundo parametro
     */
    return view('assets.create', []);

  }

 
 
}
