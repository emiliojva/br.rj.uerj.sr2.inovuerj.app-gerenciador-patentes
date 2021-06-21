<?php

/**
 * App\Models\IntellectualAssetHasAuthor
 *
 * @property int $id
 * @property int $intellectual_assets_id
 * @property int $authors_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
*/

namespace App\Models;

use Core\ADO\TModel;

class IntellectualAssetHasAuthor extends TModel
{

  protected $table = 'intellectual_assets_has_authors';
  protected $fillable = ['intellectual_assets_id', 'authors_id'];
  
  public function __construct($id = null)
  {
    parent::__construct($id);
  }

  public function author()
  {
    return $this->belongsTo('App\Models\Author','authors_id');
  }
}
