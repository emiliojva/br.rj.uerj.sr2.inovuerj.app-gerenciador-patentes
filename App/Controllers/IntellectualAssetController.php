<?php

namespace App\Controllers;

use App\Models\IntellectualAsset;
use Core\Controller\ControllerAction;
use Core\Router\Request;
use Illuminate\Database\Capsule\Manager as DB;

/**
 * Classe Controller para lidar com recursos dos ativos(Booty)
 */
class IntellectualAssetController extends ControllerAction
{

  public function __construct()
  {
    session_start();
  }

  public function create()
  {
    /**
     * Uso do ponto para melhorar a aparencia da hierarquida de pastas
     * Neste exemplo a nossa view está no caminho App/Views/usuario/editar.php, definido no primeiro parametro
     *
     * As variaveis que serão visiveis a view são passadas por array no segundo parametro
     */
    return view('bootys.create', []);

  }

  public function store(Request $request)
  {
    try {

      $intellectualAsset = new IntellectualAsset();
      $intellectualAsset->fromArray( $request->post('data.intellectual_assets') );
      $intellectualAsset->setName( "EMILIO" );

      DB::beginTransaction(); # Start transaction session with database
      $result = $intellectualAsset->save(); # Doing Persistence
      DB::commit(); # Write persistence into database case success!
      
      return [
        '_body'=> [ IntellectualAsset::latest()->first()->toArray() ],
        'msg'=>'Intellectual Asset store data with successs!'
      ];

    } catch (\Exception $e){
      
      if(!$result){
        DB::rollback(); # Undo persistence into database case success!
      }

      dump($e);

    }
    
  }
 
}
