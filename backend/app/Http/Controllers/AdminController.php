<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Admin;
use App\User;
use App\Manager;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AdminController extends Controller
{
    //
    

    public function AdminCreation(Request $request){


    }


    public function adminlogin(Request $request) {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
            'device_name' => 'required',
        ]);
     
        $user = Admin::where('email', $request->email)->first();

        if($user){
            if (! $user || ! Hash::check($request->password, $user->password)) {
                throw ValidationException::withMessages([
                    'email' => ['Invalid Account Information.'],
                ]);
            } 
        }else{
            $user = User::where('email', $request->email)->first();
    
            if($user){
                if (! $user || ! Hash::check($request->password, $user->password)) {
                throw ValidationException::withMessages([
                    'email' => ['Invalid Account Information.'],
                ]);
            } 

           }else{
           
            $user = Manager::where('email', $request->email)->first();

            if (! $user || ! Hash::check($request->password, $user->password)) {
                throw ValidationException::withMessages([
                    'email' => ['Invalid Account Information.'],
                ]);
            } 

            }
        }
     
     
      //  return response()->json(Auth::user(),200);
     return $user->createToken($request->device_name)->plainTextToken;
    
          
    }


    public function logout(Request $request){

        $request->user()->currentAccessToken()->delete();

        return response()->json([
           'message' => 'Successfully logged out'
        ]);
    }

}
