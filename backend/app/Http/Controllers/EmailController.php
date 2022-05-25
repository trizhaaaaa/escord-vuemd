<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use SendGrid;
use App\ProfessorAccount;


class EmailController extends Controller
{
    //

    public function sendemailconcern(Request $request){

        $validated = $request->validate([
       
            'senderMsg' => 'required',
            'senderEmail' => 'required|email',
            'senderName' => 'required',
          
        ]);

        $sendername = $validated['senderName'];

        $from = $validated['senderEmail'];
     
    //    $addresses = EmailListing::all();
     
   
        $emailContent = $validated['senderMsg'];

        $email = new \SendGrid\Mail\Mail(); 
        $email->setFrom($from, $sendername);
        $email->setSubject("ESCORD UCC CONCERN");
        $email->addTo("ucc.escord@gmail.com", "UCC ESCORD");
        $email->addContent("text/plain", "and easy to do anywhere, even with PHP");
        $email->addContent(
            "text/html",  $emailContent
        );
        $sendgrid = new \SendGrid(getenv('SENDGRID_API_KEY'));
        try {
            $response = $sendgrid->send($email);
            print $response->statusCode() . "\n";
            print_r($response->headers());
            print $response->body() . "\n";
        } catch (Exception $e) {
            echo 'Caught exception: '. $e->getMessage() ."\n";
        }   


    }



    public function verify($user_id, Request $request) {
        if (!$request->hasValidSignature()) {
            return response()->json(["msg" => "Invalid/Expired url provided."], 401);
        }
    
        $user = ProfessorAccount::findOrFail($user_id);
    
        if (!$user->hasVerifiedEmail()) {
            $user->markEmailAsVerified();
        }
    
        //return redirect()->to('/');
        return response()->json(["msg" => "REDIRECT."]);

    }
    
    public function resend() {
        if (auth()->user()->hasVerifiedEmail()) {
            return response()->json(["msg" => "Email already verified."], 400);
        }
    
        auth()->user()->sendEmailVerificationNotification();
    
        return response()->json(["msg" => "Email verification link sent on your email id"]);
    }
}
