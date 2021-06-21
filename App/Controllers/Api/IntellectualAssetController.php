<?php

namespace App\Controllers\Api;

use App\Models\Author;
use Core\Controller\ControllerAction;
use Core\Router\Request;
use App\Models\IntellectualAsset;
use App\Models\IntellectualAssetHasAuthor;
use Core\ADO\TDatabase as DB;  

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
    $array_params = [
      'messages' => [
        'result'    =>  'Intellectual Asset store data with successs!',
        'exception' =>  'Intellectual Asset error at store!',
      ]
    ];
    
    return $this->_save($request, $array_params);

  }

  public function update(Request $request,$id)
  {

    $array_params = [
      'id'       => $id,
      'messages' => [
        'result'    =>  'Intellectual Asset update data with successs!',
        'exception' =>  'Intellectual Asset error at update!',
      ]
    ];

    return $this->_save($request, $array_params);

  }

  private function _save(Request $request,$params)
  {

    try {
      
      /**
       * Only Logged Users
       */
      if($request->user()){

        /**
         * Database transaction persistence flow
         * DB::begin()     # Starter connection with database and begins persistence ! 
         */
        DB::begin(); # Start transaction session with database

        /**
         * @var $intellectualAsset IntellectualAsset
         */
        $intellectualAsset = new IntellectualAsset();
        if($params['id']){
          $intellectualAsset = IntellectualAsset::find($params['id']);
        }

        /**
         * Fill Model from array request post and persists to table intellectual_assets
         */
        $intellectualAsset->fromArray( $request->post('data.intellectual_assets') );
        $result = $intellectualAsset->save(); # Doing Persistence

        /**
         * Database transaction persistence flow commit
         * DB::commit()     # Write persistence into database case success! 
         */
        DB::commit(); 

        /**
         * If successful, return record persisted
         */
        if($result){
          
          return [
            '_body' =>  IntellectualAsset::last()->toArray(),
            'msg'   =>  $params['messages']['result']
          ];

        }
        
      } else {

         /**
         * Error thrown not authorized
         */
        http_response_code(401);
        throw new \Exception('User not logged');

      } 

    } catch (\Exception $e){

      /**
       * Database transaction persistence flow
       * DB::rollback();  # Cancel persistence into database case success!
       */
      DB::rollback(); # Undo persistence into database case success!

      $sql = "";
      $message = $e->getMessage();

      /**
       * Capture SQL statememnt 
       */
      $pattern = '/\(SQL:(.*)\)/';
      preg_match($pattern, $message, $output_array);
      $message_error = preg_replace($pattern,'',$message );
      if(isset($output_array[1])){
        $sql = $output_array[1];
      }

      return [
        '_body' =>  [],
        'msg'   =>  $params['messages']['exception'],
        'error' =>  [ 'code'=>$e->getCode(), 'message'=>$message_error, 'SQL'=> $sql ]
      ];
      
    }

  }

  public function associateAuthor(Request $request, $intellectual_assset_id)
  {

    try {
    /**
       * Only Logged Users
       */
      if($request->user()){

        /**
         * Database transaction persistence flow
         * DB::begin()     # Starter connection with database and begins persistence ! 
         */
        DB::begin(); # Start transaction session with database

        /**
         * @var $intellectualAsset IntellectualAsset
         */
        $intellectualAsset = new IntellectualAsset($intellectual_assset_id);


        /**
         * Create Author Persistence
         * @var $author \App\Models\Author
         */
        $author = new Author();
        $author->fromArray($request->post('data.author'));
        $author->save();

        $intellectual_asset_has_author = new IntellectualAssetHasAuthor();
        $intellectual_asset_has_author->fill([
          'intellectual_assets_id'  =>  $intellectual_assset_id, 
          'authors_id'              =>  $author->id
        ]);

        $result = $intellectual_asset_has_author->save();

        /**
         * Database transaction persistence flow commit
         * DB::commit()     # Write persistence into database case success! 
         */
        DB::commit(); 

        $body = $author->toArray();
        $body['individual'] = $author->individual->toArray();

        /**
         * If successful, return record persisted
         */
        if($result){
          
          return [
            '_body' =>  $body,
            'msg'   =>  "Author are associated to Intellectual Asset"
          ];

        }
        
      } else {

         /**
         * Error thrown not authorized
         */
        http_response_code(401);
        throw new \Exception('User not logged');

      } 

    } catch (\Exception $e){

      /**
       * Database transaction persistence flow
       * DB::rollback();  # Cancel persistence into database case success!
       */
      DB::rollback(); # Undo persistence into database case success!

      $sql = "";
      $message = $e->getMessage();

      /**
       * Capture SQL statememnt 
       */
      $pattern = '/\(SQL:(.*)\)/';
      preg_match($pattern, $message, $output_array);
      $message_error = preg_replace($pattern,'',$message );
      if(isset($output_array[1])){
        $sql = $output_array[1];
      }

      return [
        '_body' =>  [],
        // 'msg'   =>  $params['messages']['exception'],
        'error' =>  [ 'code'=>$e->getCode(), 'message'=>$message_error, 'SQL'=> $sql ]
      ];
      
    }
  }
  


}
