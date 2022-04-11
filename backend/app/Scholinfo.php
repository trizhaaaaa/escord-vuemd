<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Scholinfo extends Model
{
    //

    protected $fillable = [
        'srms_id', 'student_number','firstname','middlename','surname','address','birthday'
        ,'contact','course','section','elementary','elemyeargrad','highschool'
        ,'hsyeargrad'];
}
