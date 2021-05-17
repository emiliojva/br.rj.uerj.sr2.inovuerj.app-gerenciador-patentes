<?php

namespace Core\ADO;

use Core\Http\SessionManipulation;
use Illuminate\Database\Capsule\Manager as Capsule;


// Set the event dispatcher used by Eloquent models... (optional)
use Illuminate\Events\Dispatcher;
use Illuminate\Container\Container;

abstract class TModel extends \Illuminate\Database\Eloquent\Model {
  
  /**
   * Acionar quando persistimos do banco um array.
   * @var $_from_array
   */
  protected $_from_array = [];

  public function __construct(){

    parent::__construct();

    $this->connection();

  }

  /**
   * Overide of the magic method __set to stores data in $_from_array
   *
   * @param string $key
   * @param mixed $value
   */
  public function __set($key, $value)
  {
    parent::__set($key, $value);
    $this->_from_array[$key] = $value;
  }

  protected function _mutator($attribute,$value)
  {
    $this->{$attribute} = $value;
    $this->setAttribute($attribute,$value);
    return $this;
  }


  /**
   * Preenche os atributos do objeto atraves de um array compativel.
   * @param $array_row
   */
  public function fromArray($array_row){

    $this->_from_array = $array_row;

    foreach ($array_row as $prop=>$value){

      $this->_mutator($prop,$value);
      // $this->{$prop} = $value; # $this->attributes[$prop] = $value;
      // $MethodName = str_replace(' ','',ucwords(str_replace('_',' ',$prop)));
      // $method = "_set{$MethodName}";
      // if( method_exists($this,$method) ) {
      //   call_user_func_array([$this,$method],[$value]); # alternatives # $this->{$prop} = $value; # $this->{$method}($value);
      // }
    }

  }

  private function connection()
  {
    $capsule = new Capsule;

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

  /**
   * @return mixed
   */
  public function toArray(){

    if(empty(parent::toArray()))
    {
      return $this->_from_array;
    }

    return parent::toArray();
    
  }

  public function save(array $options = []){

    /**
     * get last id max 
     */
    $this->attributes['id'] = (int)self::latest()->first()->id + 1;

    /**
     * created by
     */
    if(is_null($this->created_user_id)){
      $this->attributes['created_user_id'] = SessionManipulation::getInstance()->user()->id;;
    }

    parent::save($options);

  }

  public static function last()
  {
    return self::latest()->first();
  }

  

}