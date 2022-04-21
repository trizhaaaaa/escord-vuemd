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

       // return Str::uuid();

        return response()->json(['message', Str::uuid()],200);
  /*   $gradesheet = DB::table('gradsheetinfo')->where('archieve', '1')->get();
      
    if ($gradetable) {
        return response()->json([
            'success' => true,
            'grades' =>$gradetable
        ]);
    } else {
        return response()->json([
            'success' => false,
            'message' => 'Sorry, couldnt get the archieve files',
        ], 500);
    } */

    }
}
