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
  
    Route::post('/logout','AdminController@logout');

  });

    Route::post('/gradesheetstudent','GradesheetController@addgradestudent');
    Route::post('/gradesheetinfo','GradesheetController@addgradesheetinfo');
    Route::get('/showgs','GradesheetController@showgradesheet');
    Route::get('/showgs/{gradesheetid}','GradesheetController@showgsbyid');

    //this is for multirows
    Route::post('/addgs','GradesheetController@addgs');

    //update 
    Route::put('/updategs/{gradesheetid}','GradesheetController@updategradesheetinfo');
    Route::put('/archievegs/{gradesheetid}','GradesheetController@archievegradesheet');


    
   
   
 
Route::post('/login','LoginController@login');
Route::post('/adminlogin','AdminController@adminlogin');

 
    

