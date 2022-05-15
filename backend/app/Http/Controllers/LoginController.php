<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Admin;
use App\ProfessorAccount;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;


class LoginController extends Controller
{
    //

    public function login(Request $request) {
        $request->validate([
            'userStudNum' => 'required',
            'userPassword' => 'required',
            'device_name' => 'required',
        ]);
     
        $user = User::where('student_number', $request->userStudNum)->first();
     
        if($user){
        if (! $user || ! Hash::check($request->userPassword, $user->password)) {
            throw ValidationException::withMessages([
                'userStudNum' => ['Invalid Faculty Number or Password.'],
            ]);
        }
    }else{

        $user = Admin::where('student_number', $request->userStudNum)->first();

        if (! $user || ! Hash::check($request->userPassword, $user->password)) {
            throw ValidationException::withMessages([
                'userStudNum' => ['Invalid Account Information.'],
            ]);
        } 
    }
        
      return $user->createToken($request->device_name)->plainTextToken;
    
   
          
    }

    public function createaccountAdmin(Request $request){

     

        $request->validate([
            'email' => 'required',
            'lastname' => 'required',
            'firstname' => 'required',
            'username' => 'required',
            'student_number' => 'required',

        ]);

      
         
        Admin::create([
            'email' =>$request->email,
            'student_number'=>$request->student_number,
            'lastname' =>$request->lastname,
            'firstname' => $request->firstname,
            'username' => $request->username,
            'user_role' =>'staff',
            'password' => Hash::make($request->student_number)
            ]);
     
 
        return response()->json(['message'=>'Account Creation Completed']);


    }

    public function createaccountStudent(Request $request){
       

        $request->validate([
            'email' => 'required',
            'lastname' => 'required',
            'firstname' => 'required',
            'student_number' => 'required', 
        ]);

     
        $name = $request->firstname . " ". $request->lastname;
    
        User::create([
            'email' =>$request->email,
            'student_number'=>$request->student_number,
            'name' => $name,
            'user_role' =>'student',
            'password' => Hash::make($request->student_number)
            ]); 
     
 
        return response()->json(['message'=>'User Account Create Success']);


    }

    public function createProfessor(Request $request){


        $request->validate([
            'profEmail' => 'required',
            'profFN' => 'required',
            'profMI' => 'required',
            'profLN' => 'required',
            'profRank' => 'required',
            'profPassword' => 'required',
            'profPasswordConfirm' => 'required|same:profPassword|',
        ]);

     
      
    
        ProfessorAccount::create([
            'email' =>$request->profEmail,
            'firstname' => $request->profFN,
            'middleinitial' => $request->profMI,
            'lastname' => $request->profLN,
            'faculty_rank' => $request->profRank,
            'user_role' =>'professor',
            'password' => Hash::make($request->profPassword)
            ]); 
     
 
        return response()->json(['message'=>'User Account Create Success']);

    }

   

   
}
