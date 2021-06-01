<?php

/**
 * App\models\Individual
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
*/

namespace App\Models;

use Core\ADO\TModel;

class Individual extends TModel
{

  protected $table = 'individuals';
  protected $fillable = ['name', 'email', 'phone', 'cell_phone', 'document_number_rg', 'document_number_cpf', 'address'];
  protected $name;

  public function __construct()
  {
    parent::__construct();
  }

  /**
   * Mutators method. Overrides the value to persist in the database
   *
   * @param mixed $name
   * @return void
   */
  public function setNameAttribute($name) 
  {
    // $this->attributes['name'] = strtolower($name);
    $this->attributes['name'] = $name;
    return $this;
  }

  
  /**
   * Get the value of name
   */
  public function getName()
  {
    return $this->name;
  }


  /**
   * Set the value of name
   *
   * @method _setName setName($value)
   * @param [type] $name
   * @return void
   */
  public function setName($name) 
  {
    // $this->name = $name; // return $this;
    return $this->_mutator('name',$name);
    
  }
 
}
