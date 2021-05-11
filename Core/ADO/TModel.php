<?php

namespace Core\ADO;

abstract class TModel {
  
  /**
   * Acionar quando persistimos do banco um array.
   * @var $_from_array
   */
  protected $_from_array = [];

  public function __construct(){}

  /**
   * Preenche os atributos do objeto atraves de um array compativel.
   * @param $array_row
   */
  public function fromArray($array_row){

    $this->_from_array = $array_row;

    foreach ($array_row as $prop=>$value){

      $method = 'set'.ucwords($prop);

      if( method_exists($this,$method) ) {
        call_user_func_array([$this,$method],$value); # $this->{$prop} = $value;
      }
      
    }

  }

  /**
   * @return mixed
   */
  public function toArray(){
    return $this->_from_array;
  }


}