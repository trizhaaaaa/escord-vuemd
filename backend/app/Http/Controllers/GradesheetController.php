<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Gradeofstudent;
use App\GradesheetInfo;
use Illuminate\Support\Facades\DB;

use Validator;




class GradesheetController extends Controller
{
    //
    public function addgradestudent(Request $request){

        $request->validate([
            'student_number' => 'required',
            'studentname' => 'required',
            'midterm' => 'required',
            'finalterm' => 'required',
            'finalgrade' => 'required',
            'gradesheetid' => 'required',

        ]);
  

        $gradetable = new Gradeofstudent;
        $gradetable->gradesheetid  = $request->gradesheetid;
        $gradetable->student_number  = $request->student_number;
        $gradetable->studentname  = $request->studentname;
        $gradetable->midterm  = $request->midterm;
        $gradetable->finalterm  = $request->finalterm;
        $gradetable->finalgrade  = $request->finalgrade;
        $gradetable->save();

        return response()->json(['message'=>'grade added successfully']);

        
    }


    public function addgradesheetinfo(Request $request){

        $request->validate([
            'gradesheetid' => 'required',
            'subjectcode' => 'required',
            'subjectdesc' => 'required',
            'semester' => 'required',
            'sem_startyear' => 'required',
            'sem_endyear' => 'required',
            'units' => 'required',
            'time' => 'required',
            'day' => 'required',
            'course_short' => 'required',
            'course_year' => 'required',
            'course_section' => 'required',
            'professor' => 'required',
            'facultyrank' => 'required',

        ]);

        $gradetable = new GradesheetInfo;
        $gradetable->gradesheetid  = $request->gradesheetid;
        $gradetable->subjectcode  = $request->subjectcode;
        $gradetable->subjectdesc  = $request->subjectdesc;
        $gradetable->semester  = $request->semester;
        $gradetable->sem_startyear  = $request->sem_startyear;
        $gradetable->sem_endyear  = $request->sem_endyear;
        $gradetable->units  = $request->units;
        $gradetable->time  = $request->time;
        $gradetable->day  = $request->day;
        $gradetable->course_short  = $request->course_short;
        $gradetable->course_year  = $request->course_year;
        $gradetable->course_section  = $request->course_section;
        $gradetable->professor  = $request->professor;
        $gradetable->facultyrank  = $request->facultyrank;

        $gradetable->save();

        return response()->json(['message'=>'grade added successfully']);

    }


    public function showgradesheet(){
      
        $gradesheet = GradesheetInfo::all();

        return response()->json($gradesheet);
      
     

    }

    public function showgsbyid($gradesheetid){
      
       // $gradesheet = GradesheetInfo::find($gradesheetid);
        $gradesheet = DB::table('gradsheetinfo')->where('gradesheetid', $gradesheetid)->get();
        return response()->json($gradesheet);
      
     

    }


    public function updategradesheetinfo(Request $request,$gradesheetid){


        $gradetable = DB::table('gradsheetinfo')->where('gradesheetid', $gradesheetid)->get();


   
        $gradetable->subjectcode  = $request->input('subjectcode');
        $gradetable->subjectdesc  = $request->input('subjectdesc');
        $gradetable->semester  = $request->input('semester');
        $gradetable->sem_startyear  = $request->input('sem_startyear');
        $gradetable->sem_endyear  = $request->input('sem_endyear');
        $gradetable->units  = $request->input('units');   
        $gradetable->time  = $request->input('time');
        $gradetable->day  = $request->input('day');
          $gradetable->course_short  = $request->input('course_short');
        $gradetable->course_year  = $request->input('course_year');
        $gradetable->course_section  = $request->input('course_section');
        $gradetable->professor  = $request->input('professor');
       $gradetable->facultyrank  = $request->input('facultyrank');

       $gradetable->save();


       return response()->json($gradetable);


    }

    public function addgs(Request $request)
    {

        $this->validate($request,[
            'student_number.*' => 'required',
            'studentname.*' => 'required',
            'midterm.*' => 'required',
            'finalterm.*' => 'required',
            'finalgrade.*' => 'required',
            'gradesheetid.*' => 'required',

        ]);
  

        $requestData = $request->all();

  /* foreach( $requestData as $key=>$datainside){

          /*   $data = new Gradeofstudent;
            $data->student_number  = $datainside->student_number;
            $data->gradesheetid =  $datainside->$gradesheetid;
            $data->studentname  = $datainside->studentname;
            $data->midterm  = $datainside->midterm;
            $data->finalterm  = $datainside->finalterm;
            $data->finalgrade  = $datainside->finalgrade;
            $data-save();

            } 
 */

  

              Gradeofstudent::insert($requestData);
 
              return response()->json(['message'=>'grade added successfully']);
        

              /*   foreach ($requestData as $key => $data) {
                Gradeofstudent::create([
                'gradesheetid'       =>  $data->gradesheetid,
                'student_number'       =>  $data->student_number,
                'midterm'      =>  $data->midterm,
                'finalterm'         =>  $data->finalterm,
                'finalgrade' =>  $data->finalgrade,
                'studentname'     =>  $data->studentname
                ]);
            } */

        //return response()->json(['message'=>'grade added successfully']);

     }


  

}
