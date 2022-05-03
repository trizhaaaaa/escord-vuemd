<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EvaluationForm extends Model
{
    //

    protected $fillable = [
        'gradesheetid', 'status_of_ef','archieve',
      ];


      protected $primaryKey = 'gradesheetid';
     
     
  
      protected $table = 'evaluation_forms';
}
