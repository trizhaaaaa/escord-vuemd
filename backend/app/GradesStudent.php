<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GradesStudent extends Model
{
    //

    protected $fillable = [
        'student_number','gradesheetid', 'studentname','midterm','finalterm','finalgrade',
      ];
  
  
      protected $primaryKey = 'gradesheetid';
}
