<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use SendGrid;

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
        $email->addTo("uccscholasticmanagement@gmail.com", "UCC ESCORD");
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
}
