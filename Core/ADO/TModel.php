<?php

namespace Core\ADO;

use Core\Http\SessionManipulation;
abstract class TModel extends \Illuminate\Database\Eloquent\Model {
  
  /**
   * Acionar quando persistimos do banco um array.
   * @var $_from_array
   */
  protected $_from_array = [];

  public function __construct($id = null){

    parent::__construct();

    if($id){
      $this->fromArray(self::find($id)->toArray());
    }

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
     * get last id max for store new record
     */
    if(!$this->attributes['id']){
      $this->attributes['id'] = (int)self::latest()->first()->id + 1;
    }
    

    /**
     * created by
     * default admin (id = 1)
     */
    if(is_null($this->created_user_id)){
      $userLogged = SessionManipulation::getInstance()->user();
      $this->attributes['created_user_id'] = $userLogged ? $userLogged->id : 1;
    }

    return parent::save($options);

  }

  public static function last()
  {
    return self::latest()->first();
  }

  

}