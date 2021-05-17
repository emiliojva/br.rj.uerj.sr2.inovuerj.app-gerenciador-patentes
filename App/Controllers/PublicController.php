<?php

namespace App\Controllers;

use Core\Controller\ControllerAction;

class PublicController extends ControllerAction
{

  public function home()
  {

    session_start();

    /**
     * Uso do ponto para melhorar a aparencia da hierarquida de pastas
     * Neste exemplo a nossa view está no caminho App/Views/usuario/editar.php, definido no primeiro parametro
     *
     * As variaveis que serão visiveis a view são passadas por array no segundo parametro
     */
    return view('home.index', []);

  }

  public function about(){
    echo 'Estou na rota sobre';
  }

  public function pageNotFound()
  {

    session_start();

    /**
     * Uso do ponto para melhorar a aparencia da hierarquida de pastas
     * Neste exemplo a nossa view está no caminho App/Views/usuario/editar.php, definido no primeiro parametro
     *
     * As variaveis que serão visiveis a view são passadas por array no segundo parametro
     */
    return view('home.page-not-found', []);

  }

}
