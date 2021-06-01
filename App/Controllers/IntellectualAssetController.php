<?php

namespace App\Controllers;

use App\Models\IntellectualAsset;
use Core\ADO\TDatabase;
use Core\Controller\ControllerAction;

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
    return $this->render('assets.index', []);

  }

  public function create()
  {
    /**
     * Uso do ponto para melhorar a aparencia da hierarquida de pastas
     * Neste exemplo a nossa view está no caminho App/Views/usuario/editar.php, definido no primeiro parametro
     *
     * As variaveis que serão visiveis a view são passadas por array no segundo parametro
     */
    return $this->render('assets.create', []);  

  }

  public function edit($id)
  {

    TDatabase::begin();
    $asset_instance =  IntellectualAsset::find($id);
    $types = IntellectualAsset::$types;
    TDatabase::commit();

    /**
     * Uso do ponto para melhorar a aparencia da hierarquida de pastas
     * Neste exemplo a nossa view está no caminho App/Views/usuario/editar.php, definido no primeiro parametro
     *
     * As variaveis que serão visiveis a view são passadas por array no segundo parametro
     */
    return $this->render('assets.edit', compact(['asset_instance','types']));  

  }

 
 
}
