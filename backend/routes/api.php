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
  Route::post('/gradesheetinfo','GradesheetController@addgradesheetinfo');
 
    Route::post('/gradesheetstudent','GradesheetController@addgradestudent');
  
    
    Route::get('/showgs/{gradesheetid}','GradesheetController@showgsbyid');


    Route::get('/showgs','GradesheetController@showgradesheet');

    Route::get('/displaygrade/{gradesheetid}','GradesheetController@showspecgradesheet');



    //this is for multirows patch method
    Route::patch('/addgs','GradesheetController@addgs');

    //update  GRADESHEET
    Route::put('/updategs/{gradesheetid}','GradesheetController@updategradesheetinfo');

    //ARRCHIIEVE NG GRADESHEET PER ID
    Route::put('/archievegs/{gradesheetid}','GradesheetController@archievegradesheet');


   //SHOW NG ARCHEIVE NG GRADESHEET
    Route::get('/archievegs','ArchieveController@archievegradesheet');
    Route::get('/archieveschol','ArchieveController@archievescholastic');
    Route::get('/archieveevalform','ArchieveController@archieveeval');

   





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
 
//update of account 
//konting edit nalang
Route::put('/updateAdmin/{id}','AdminController@updateAccountAdmin');   
Route::put('/updateStudent/{id}','AdminController@updateAccountUser');   

