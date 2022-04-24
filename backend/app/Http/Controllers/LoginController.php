<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Admin;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;


class LoginController extends Controller
{
    //

    public function login(Request $request) {
        $request->validate([
            'faculty_number' => 'required',
            'password' => 'required',
            'device_name' => 'required',
        ]);
     
        $user = User::where('student_number', $request->faculty_number)->first();
     
        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'faculty_number' => ['Invalid Faculty Number or Password.'],
            ]);
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

   

   
}
