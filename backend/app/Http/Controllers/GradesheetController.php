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
            'studNum' => 'required',
            'studFN' => 'required',
            'studLN' => 'required',
            'studMI' => 'required',
            'studMG' => 'required',
            'studFG' => 'required',
            'finalgrade' => 'required',
            'gradesheetid' => 'required',

        ]);

        $studentname = $request->studLN . " ". $request->studFN  . " ". $request->studMI;
  

        $gradetable = new Gradeofstudent;
        $gradetable->gradesheetid  = $request->gradesheetid;
        $gradetable->student_number  = $request->studNum;
        $gradetable->studentname  = Str::upper($studentname);
        $gradetable->midterm  = $request->studMG;
        $gradetable->finalterm  = $request->studFG;
        $gradetable->finalgrade  = $request->finalgrade;
        $gradetable->save();

        return response()->json(['message'=>'grade added successfully']);

        
    }


    public function addgradesheetinfo(Request $request){
     
  
        $request->validate([
            'subjCode' => 'required',
            'subjDesc' => 'required',
            'subjSem' => 'required',
            'subjSY_start' => 'required',
            'subjSY_end' => 'required',
            'subjUnit' => 'required',
            'subjTime' => 'required',
            'subjDay' => 'required',
            'classProg' => 'required',
            'classYr' => 'required',
            'classSec' => 'required',
            'profName' => 'required',
            'profRank' => 'required',

        ]); 

        $gradesheetid = Str::uuid();

        $gradetable = new GradesheetInfo;
        $gradetable->gradesheetid  =Str::upper($gradesheetid);
        $gradetable->subjectcode  =  Str::upper($request->subjCode);
        $gradetable->subjectdesc  = Str::upper($request->subjDesc);
        $gradetable->semester  = Str::upper($request->subjSem);
        $gradetable->sem_startyear  = Str::upper($request->subjSY_start);
        $gradetable->sem_endyear  = Str::upper($request->subjSY_end);
        $gradetable->units  = Str::upper($request->subjUnit);
        $gradetable->time  = Str::upper($request->subjTime);
        $gradetable->day  = Str::upper($request->subjDay);
        $gradetable->course_short  =Str::upper($request->classProg);
        $gradetable->course_year  = Str::upper($request->classYr);
        $gradetable->course_section  = Str::upper($request->classSec);
        $gradetable->professor  = Str::upper($request->profName);
        $gradetable->facultyrank  = Str::upper($request->profRank);
        $gradetable->professorID  =$request->profID;

        

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

    //gradesheetpage

    public function showgsbyid(Request $request,$gradesheetid){
      
       // $gradesheet = GradesheetInfo::find($gradesheetid);
        $gradesheet = DB::table('gradsheetinfo')->where('gradesheetid', $gradesheetid)->get();
        return response()->json($gradesheet);
      
     //WAG KALIMUTAN LAGYAN NG REQUEST PARA MAKUHA YUNG SHEET

    }

    //gradesheetcardper professor

    public function gradesheetcardprof(Request $request, $profid){

        $gradesheetprof = DB::table('gradsheetinfo')->where('professorID', $profid)->get();
        return response()->json($gradesheetprof);

    }
    //

    public function archievegradesheet(Request $request, $gradesheetid){



        $gradetable = DB::table('gradsheetinfo')->where('gradesheetid', $gradesheetid)->limit(1)->update([
            'archieve' => $request->status_archieve,

        ]);

      //  $grades = DB::table('gradsheetinfo')->where('gradesheetid', $gradesheetid)->limit(1)->get();

     
            return response()->json([
                'success' => true,
                'grades' =>$gradesheetid
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
