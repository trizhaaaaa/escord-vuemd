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
}
