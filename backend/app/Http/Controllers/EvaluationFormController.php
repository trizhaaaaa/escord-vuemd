<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\EvaluationForm;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

use Illuminate\Support\Str;
use Illuminate\Support\Collection;




class EvaluationFormController extends Controller
{
    //


    //show,search,count


    public function EvalShow(){


       /*  $allevalform = DB::table('evaluation_forms')
            ->leftJoin('scholinfos', 'evaluation_forms.srms_id', '=', 'scholinfos.srms_id')
            ->get();
 */

        //$allevalform = EvaluationForm::all();


        $allevalform = DB::table('gradeofstudents')
        ->leftJoin('evaluation_forms', 'gradeofstudents.gradesheetid', '=', 'evaluation_forms.gradesheetid')
        ->leftJoin('scholinfos', 'evaluation_forms.srms_id', '=', 'scholinfos.srms_id')
        ->get();


        //three tables


        return response()->json($allevalform);
    }

    //creation ng account
    public function enrollmentdb(){

        $finalArray = [];
       
        $gradesheetid = Str::uuid();

      
        
        $student_detail = DB::connection('mysql2')->table("tblstudents")->get();


        $batch = array();
        foreach($student_detail as $items){
            $student_number = $items->studentNumber;
            $email = $items->email;
            $batch[] = array('student_number' => $student_number,'email' => $email,'gradesheetid' =>  $gradesheetid = Str::uuid(),'password' => $student_number,'user_role'=>'student');
        }
       // $merged = $student_detail->merge($data);
     //   $finalArray = array_merge($data, $$arr1);


        //$result = $merged->all();

return response()->json($batch);

    }


    public function enrolldbprof(Request $request){
       $data = $request->user()->professorID;

      // $userID = auth()->user()->email; 
      $userEmail = auth()->user()->id; 

      $data2 = 22002;

     // $student_detail = DB::connection('mysql2')->table("tblaccounts")->leftjoin('tblprofessors', 'tblaccounts.accountID', '=', 'tblprofessors.accountID')->where('professorID','=',$data)->get();

    $student_detail = DB::connection('mysql2')->table("tblprofessorsubjects")->leftjoin('tblsubjects', 'tblprofessorsubjects.subjectCode', '=', 'tblsubjects.subjectCode')
    ->leftjoin('tblsubjectschedules', 'tblprofessorsubjects.scheduleID', '=', 'tblsubjectschedules.scheduleID')
    ->leftjoin('tblcoursedetails', 'tblsubjectschedules.courseID', '=', 'tblcoursedetails.courseID')->where('tblprofessorsubjects.professorID','=',$data)->get();



    $batch = array();
    foreach($student_detail as $items){
        $subjectcode = $items->subjectCode;
        $subjectdesc = $items->subjectDescription;
        $semester = $items->semester;
        $sem_start = $items->schoolYear;
    //    $sem_end = $items->;
        $units = $items->subjectUnits;
        $starttime = $items->startTime;
        $endtime = $items->endTime;

        $day = $items->day;
        $course = $items->courseDescription;
        $course_year = $items->year;
        $course_section = $items->section;
     //   $professor = $items->;
      //  $facultyrank = $items->;




        $batch[] = array('gradesheetid' =>  $gradesheetid = Str::uuid(), 'subjectcode' => $subjectcode, 'subjectdesc' => $subjectdesc,'semester' => $semester,
        'sem_start' => $sem_start,'units' => $units,'starttime' => $starttime,'endtime' => $endtime,'day' => $day,'course' => $course,'course_year' => $course_year,
        'course_section' => $course_section);

    }


    return response()->json($batch);

        
    }
}
