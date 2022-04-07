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

   
}
