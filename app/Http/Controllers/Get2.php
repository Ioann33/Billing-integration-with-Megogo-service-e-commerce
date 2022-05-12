<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class Get2 extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        return "auth().id()=".Auth::id();
//        return '111111';
        //$request->user()->currentAccessTocken()->delete();
    }

    public function index(){
        //return Auth::id();
        return "auth().id()=".Auth::id();;
    }
}
