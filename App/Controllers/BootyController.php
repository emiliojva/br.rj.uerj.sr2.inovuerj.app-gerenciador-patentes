<?php

namespace App\Controllers;

use Core\Controller\ControllerAction;

/**
 * Classe Controller para lidar com recursos dos ativos(Booty)
 */
class BootyController extends ControllerAction
{

  public function create()
  {

    session_start();
    

    /**
     * Uso do ponto para melhorar a aparencia da hierarquida de pastas
     * Neste exemplo a nossa view está no caminho App/Views/usuario/editar.php, definido no primeiro parametro
     *
     * As variaveis que serão visiveis a view são passadas por array no segundo parametro
     */
    return view('bootys.create', []);

  }

}
