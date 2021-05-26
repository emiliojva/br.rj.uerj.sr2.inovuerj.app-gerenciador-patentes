<?php

/*
 * classe TDatabase
 *  gerencia conexes com bancos de dados,
 *  atravs de arquivos de configurao.
 */
namespace Core\ADO;

use Illuminate\Database\Capsule\Manager as Capsule;

// Set the event dispatcher used by Eloquent models... (optional)
use Illuminate\Events\Dispatcher;
use Illuminate\Container\Container;


final class TDatabase
{
    /**
     * @property $instance \Illuminate\Database\Capsule\Manager
     */
    private static $instance;
    
    /*
    * mtodo __construct()
    *  No existiro instncias de TConnection
    *  por isto, estamos marcando-o como private
    */
    private function __construct()
    {
    }

    /**
     * @return \Illuminate\Database\Capsule\Manager
     */
    private static function getInstance()
    {

        if(!self::$instance){

            /**
             * @var $capsule \Illuminate\Database\Capsule\Manager
             */
            $capsule = new Capsule;

            self::$instance = $capsule;

            $capsule->addConnection([
                'driver'    => 'mysql',
                'host'      => 'localhost',
                'database'  => 'inovuerj_processos',
                'username'  => 'emilio',
                'password'  => '1234',
                'charset'   => 'utf8',
                'collation' => 'utf8_unicode_ci',
                'prefix'    => '',
                'strict'    => false
            ]);

            // Events drive eloquent
            $capsule->setEventDispatcher(new Dispatcher(new Container));

            // Make this Capsule instance available globally via static methods... (optional)
            $capsule->setAsGlobal();

            // Setup the Eloquent ORM... (optional; unless you've used setEventDispatcher())
            $capsule->bootEloquent();

        }

        return self::$instance;
    }

    public function __callStatic($name, $arguments)
    {
        $instance = self::getInstance();
        return call_user_func_array([$instance, $name], $arguments);
    }

    public static function begin(){
        return self::getConnection()->getPdo()->beginTransaction();
    }

    public static function commit(){

        $pdoStatement = self::getConnection()->getPdo();

        if( $pdoStatement->inTransaction() ){
            return $pdoStatement->commit();
        }

    }

    public static function rollback(){
        
        $pdoStatement = self::getConnection()->getPdo();

        if( $pdoStatement->inTransaction() ){
            return $pdoStatement->rollback();
        }

    }

    public static function getConnection(){
        return self::getInstance()->getConnection();
    }
}
