<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;


class LoginController extends Controller
{
    //

    public function login(Request $request) {
        $request->validate([
            'faculty_number' => 'required',
            'password' => 'required',
            'device_name' => 'required',
        ]);
     
        $user = User::where('faculty_number', $request->faculty_number)->first();
     
        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'faculty_number' => ['The provided credentials are incorrect.'],
            ]);
        }
     
       return $user->createToken($request->device_name)->plainTextToken;
    
   

    }

    public function logout(){

        Auth::guard('web')->logout();
    }
}
