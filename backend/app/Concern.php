<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Concern extends Model
{
    //
    protected $fillable = [
        'email','name','message',
     ];

     protected $table = 'concern';


    public $timestamps = true;

}
