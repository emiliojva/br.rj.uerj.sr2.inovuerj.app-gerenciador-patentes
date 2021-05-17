<?php

namespace App\Controllers\Api;

use Core\Controller\ControllerAction;
use Core\Router\Request;
use App\Models\IntellectualAsset;
use Illuminate\Database\Capsule\Manager as DB;

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
    try {

      $intellectualAsset = new IntellectualAsset();
      $intellectualAsset->fromArray( $request->post('data.intellectual_assets') );
      $intellectualAsset->setName( "EMILIO - " . time() );

      DB::beginTransaction(); # Start transaction session with database
      $result = $intellectualAsset->save(); # Doing Persistence
      DB::commit(); # Write persistence into database case success!

      return [
        '_body'=> [ IntellectualAsset::last()->toArray() ],
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
