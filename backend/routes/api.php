<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
   
 });
 Route::group(['middleware' => 'auth:sanctum'], function() {
    //logout session

  
    Route::post('/logout','AdminController@logout');
     //addgradesheetinfo
     

  });


  
   
   Route::get('/edb','EvaluationFormController@enrolldbprof')->middleware('auth:sanctum');




  
  


//gradesheet dashboard modal
  Route::post('/gradesheetinfo','GradesheetController@addgradesheetinfo');
 
 // gradesheet page modal
    Route::post('/gradesheetstudent','GradesheetController@addgradestudent');
  
    
    Route::get('/showgs/{gradesheetid}','GradesheetController@showgsbyid');


    Route::get('/showgs','GradesheetController@showgradesheet');

    Route::get('/displaygrade/{gradesheetid}','GradesheetController@showspecgradesheet');


    //gradesheet per prof card
    Route::get('/perprofcard/{gradesheetid}','GradesheetController@gradesheetcardprof');


    //this is for multirows patch method
    Route::patch('/addgs','GradesheetController@addgs');

    //update  GRADESHEET
    Route::put('/updategs/{gradesheetid}','GradesheetController@updategradesheetinfo');

    //ARRCHIIEVE NG GRADESHEET PER ID
    Route::put('/archievegs/{gradesheetid}','GradesheetController@archievegradesheet');


   //SHOW NG ARCHEIVE NG GRADESHEET
    Route::get('/archievegs','ArchieveController@archievegradesheet');
    Route::get('/archieveschol','ArchieveController@archievescholastic');


   





//login of all account
Route::post('/adminlogin','AdminController@adminlogin');

Route::post('/userlogin','LoginController@login');



//Manager{{SuperAdmin API}}

//showing ng account
Route::get('/showuseraccount','AdminController@showuseraccount');
Route::get('/showadminaccount','AdminController@showadminaccount');

//creation of account
Route::post('/createaccadm','LoginController@createaccountAdmin');
Route::post('/createaccstud','LoginController@createaccountStudent');
Route::post('/createaccprof','LoginController@createProfessor');
 


//update of account 
//konting edit nalang
Route::put('/updateAdmin/{id}','AdminController@updateAccountAdmin');   
Route::put('/updateStudent/{id}','AdminController@updateAccountUser');   

//evaluation api
Route::get('/archieveevalform','ArchieveController@archieveeval');
Route::get('/evalform','EvaluationFormController@EvalShow');


//TRIAL FOR ENROLLMENT DB

Route::get('/enrolldb','EvaluationFormController@enrollmentdb');


///SCHOLASTIC RECORD 

//mis schol
Route::get('/perstudentschol/{studentnumber}','ScholasticRecordController@showscholastperStudent');



Route::get('/showscolmis','ScholasticRecordController@showscolasticMIS');

//student schol
Route::get('/studentschol/{studentnumber}','ScholasticRecordController@scholstudent');
