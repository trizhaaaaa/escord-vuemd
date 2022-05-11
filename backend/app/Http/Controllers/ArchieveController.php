<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\GradesheetInfo;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ArchieveController extends Controller
{
    //


    public function archievegradesheet(){

    
 $gradesheet = DB::table('gradsheetinfo')->where('archieve', '1')->get();
      
    if ($gradesheet) {
        return response()->json([
            'success' => true,
            'grades' =>$gradesheet
        ]);
    } else {
        return response()->json([
            'success' => false,
            'message' => 'Sorry, couldnt get the archieve files',
        ], 500);
    } 

    }

    public function archievescholastic(){
       
        $scholinfo = DB::table('scholinfos')->where('archieve', '1')->get();
      
        if ($scholinfo) {
            return response()->json([
                'success' => true,
                'grades' =>$scholinfo
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, couldnt get the archieve files',
            ], 500);
        } 
    
     
 
     }

     public function archieveeval(){

        $evalform = DB::table('evaluation_forms')->where('archieve', '1')->get();
      
        if ($evalform) {
            return response()->json([
                'success' => true,
                'grades' =>$evalform
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, couldnt get the archieve files',
            ], 500);
        } 
    

            //archieve query of evaluation
     }


     public function pdfconversion($data,Request $request){

        $pdf = PDF::loadView('file.pdf', ['data' => $data]);
        return $pdf->output();


     }
}
