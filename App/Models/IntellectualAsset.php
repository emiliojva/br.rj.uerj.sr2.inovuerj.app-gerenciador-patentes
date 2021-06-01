<?php

/**
 * App\Models\IntellectualAsset
 *
 * @property int $id
 * @property string $name
 * @property string|null $summary
 * @property int $intellectual_assets_types_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
*/

namespace App\Models;

use Core\ADO\TModel;

class IntellectualAsset extends TModel
{

  protected $table = 'intellectual_assets';
  protected $fillable = ['name', 'summary','intellectual_assets_types_id'];

  protected $name;
  protected $summary;
  protected $intellectual_assets_types_id;

  public static $types = [
    "1"=>  "Patente",
    "2"=>  "Modelo de Utilidade",
    "3"=>  "Desenho Industrial",
    "4"=>  "Programa de Computador",
    "5"=>  "Direito Autoral",
    "6"=>  "Marca",
  ];

  

  public function __construct($id = null)
  {
    parent::__construct($id);
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

 
 

  /**
   * Get the value of summary
   */
  public function getSummary()
  {
    return $this->summary;
  }

  /**
   * Set the value of summary
   */
  public function setSummary($summary) 
  {
    $this->summary = $summary;

    return $this;
  }

  /**
   * Get the value of intellectual_assets_types_id
   */
  public function getIntellectualAssetsTypesId()
  {
    return $this->intellectual_assets_types_id;
  }

  /**
   * Set the value of intellectual_assets_types_id
   */
  public function setIntellectualAssetsTypesId($intellectual_assets_types_id) 
  {
    $this->intellectual_assets_types_id = $intellectual_assets_types_id;

    return $this;
  }
}
