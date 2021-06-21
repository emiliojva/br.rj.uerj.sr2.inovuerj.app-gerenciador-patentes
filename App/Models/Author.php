<?php

/**
 * App\models\Author
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
*/

namespace App\Models;

use Core\ADO\TModel;

class Author extends TModel
{
  protected $table = 'authors';
  protected $fillable = ['individuals_id','authors_bond_types_id','registration','titration'];
  
  protected $individuals_id;
  protected $authors_bond_types_id;
  protected $center;
  protected $academic_unit;
  protected $registration;
  protected $titration;

  public function __construct()
  {
    parent::__construct();
  }

  public function save(array $options = [])
  {
    
    $individual = new Individual();
    $individual->fill($this->attributes['individual']); unset($this->attributes['individual']);
    $individual->save();

    $this->attributes['individuals_id'] = $individual->id;
    parent::save(); 

  }

  /**
   * Author is composed by one individual
   *
   * @return void
   */
  public function individual(){
    return $this->belongsTo('App\Models\Individual','id');
  }
 
}
