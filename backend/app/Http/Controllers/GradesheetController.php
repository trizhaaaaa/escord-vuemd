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
            'firstname' => 'required',
            'lastname' => 'required',
            'middlename' => 'required',
            'midterm' => 'required',
            'finalterm' => 'required',
            'finalgrade' => 'required',
            'gradesheetid' => 'required',

        ]);

        $studentname = $request->lastname . " ". $request->firstname  . " ". $request->middlename;
  

        $gradetable = new Gradeofstudent;
        $gradetable->gradesheetid  = $request->gradesheetid;
        $gradetable->student_number  = $request->student_number;
        $gradetable->studentname  = Str::upper($studentname);
        $gradetable->midterm  = $request->midterm;
        $gradetable->finalterm  = $request->finalterm;
        $gradetable->finalgrade  = $request->finalgrade;
        $gradetable->save();

        return response()->json(['message'=>'grade added successfully']);

        
    }


    public function addgradesheetinfo(Request $request){
     
  
        $request->validate([
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

        $gradesheetid = Str::uuid();

        $gradetable = new GradesheetInfo;
        $gradetable->gradesheetid  =Str::upper($gradesheetid);
        $gradetable->subjectcode  =  Str::upper($request->subjectcode);
        $gradetable->subjectdesc  = Str::upper($request->subjectdesc);
        $gradetable->semester  = Str::upper($request->semester);
        $gradetable->sem_startyear  = Str::upper($request->sem_startyear);
        $gradetable->sem_endyear  = Str::upper($request->sem_endyear);
        $gradetable->units  = Str::upper($request->units);
        $gradetable->time  = Str::upper($request->time);
        $gradetable->day  = Str::upper($request->day);
        $gradetable->course_short  =Str::upper($request->course_short);
        $gradetable->course_year  = Str::upper($request->course_year);
        $gradetable->course_section  = Str::upper($request->course_section);
        $gradetable->professor  = Str::upper($request->professor);
        $gradetable->facultyrank  = Str::upper($request->facultyrank);

        $gradetable->save();


    

        if ($gradetable) {
            return response()->json(['message'=>'grade added successfully']);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, grades could not be updated',
            ], 500);
        }
 
    }


    public function showgradesheet(){
      
        $gradesheet = GradesheetInfo::all();

        return response()->json($gradesheet);
      
     

    }

    public function showgsbyid(Request $request,$gradesheetid){
      
       // $gradesheet = GradesheetInfo::find($gradesheetid);
        $gradesheet = DB::table('gradsheetinfo')->where('gradesheetid', $gradesheetid)->get();
        return response()->json($gradesheet);
      
     //WAG KALIMUTAN LAGYAN NG REQUEST PARA MAKUHA YUNG SHEET

    }


    public function archievegradesheet(Request $request, $gradesheetid){



        $gradetable = DB::table('gradsheetinfo')->where('gradesheetid', $gradesheetid)->limit(1)->update([
            'archieve' => $request->status_archieve,

        ]);

      //  $grades = DB::table('gradsheetinfo')->where('gradesheetid', $gradesheetid)->limit(1)->get();

     
            return response()->json([
                'success' => true,
                'grades' =>$gradetable
            ]);
      


    }


    public function updategradesheetinfo(Request $request,$gradesheetid){


  

                $grades = GradesheetInfo::where('gradesheetid', '=', $gradesheetid)->firstOrFail();   

                $updated = $grades->update($request->all());

                if ($updated) {
                    return response()->json([
                        'success' => true,
                        'grades' => $grades
                    ]);
                } else {
                    return response()->json([
                        'success' => false,
                        'message' => 'Sorry, cook could not be updated',
                    ], 500);
                }


    }

    //patch method
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

  

              Gradeofstudent::upsert($requestData);
 
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

     public function showspecgradesheet(Request $request,$gradesheetid){

        $gradesheet= DB::table('gradeofstudents')->where('gradesheetid', $gradesheetid)->orderBy('studentname')->get();

        return response()->json($gradesheet);



     }


  

}
