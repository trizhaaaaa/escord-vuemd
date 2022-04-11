<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Gradeofstudent;
use Validator;




class GradesheetController extends Controller
{
    //
    public function addGradesheetstudent(Request $request){

        $request->validate([
            'student_number' => 'required|max:10',
            'studentname' => 'required',
            'midterm' => 'required',
            'finalterm' => 'required',
            'finalgrade' => 'required',
        ]);
  
     
        $gradesheetid = Str::random(15);

        $gradetable = new Gradeofstudent;
        $gradetable->student_number  = $request->student_number;
        $gradetable->studentname  = $request->studentname;
        $gradetable->midterm  = $request->midterm;
        $gradetable->finalterm  = $request->finalterm;
        $gradetable->finalgrade  = $request->finalgrade;
        $gradetable->save();


     
        return response()->json([
            'name' => 'Abigail',
            'state' => 'CA',
        ]);

        
    }
}
