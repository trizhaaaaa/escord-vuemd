<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class ScholasticRecordController extends Controller
{
    //

    //show this to MIS TABLE

    public function showscholastperStudent(Request $request, $student_number){
        //this is per SR OF STUDENT

        $studentscholinfo = DB::table('scholinfos')
        ->leftJoin('gradeofstudents', 'scholinfos.student_number', '=', 'gradeofstudents.student_number')
        ->leftJoin('gradsheetinfo', 'gradeofstudents.gradesheetid', '=', 'gradsheetinfo.gradesheetid')->where('scholinfos.student_number', $student_number)->limit(1)->get();

        return response()->json($studentscholinfo);

    }

    //THIS IS ALL SCHOLASTIC INFO
    public function showscolasticMIS(Request $request){
            //

            $scholinfo= DB::table('scholinfos')->orderBy('surname')->get();


        return response()->json($scholinfo);
    }

    //THIS IS STUDENT SCHOL INFO GET

    public function scholstudent(Request $request, $student_number){

        $student = DB::table('scholinfos')
        ->leftJoin('scholstudentgrades', 'scholinfos.srms_id', '=', 'scholstudentgrades.srms_id')
        ->leftJoin('scholstudents', 'scholstudentgrades.srms_id', '=', 'scholstudents.srms_id')->where('scholinfos.student_number', $student_number)->limit(1)->get();
       
        return response()->json($student);

    }


    //MIS UPDATE

    public function scholupdate(Request $request, $srms_id){
        $studentupdate = DB::table('scholinfos')
        ->where('srms_id', $srms_id)
        ->update(['student_number' => $request->studNum,
        'course' => $request->studProgram,
        'section' => $request->studSection,
        'surname' => $request->studLN,
        'firstname' => $request->studFN,
        'middlename' => $request->studMI,
        'birthday' => $request->studBirthday,
        'address' => $request->studAddress,
        'contact' => $request->studContactNum,
        'elementary' => $request->studElemSchool,
        'elemyeargrad' => $request->studElemGradYr,
        'highschool' => $request->studHighSchool,
        'hsyeargrad' => $request->studHighSchoolGradYr,
    //    'archieve' =>$request->arch
                ]);

        return response()->json($studentupdate);

    }


}
