<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GoogleAuthController extends Controller
{
    public function attach(Request $request)
    {
        $this->validate($request, [
            'email'=>'required',
            'google_id'=>'required',
        ]);
        $user_id = Auth::id();
        $user = User::findOrFail($user_id);
        $user->email = $request->email;
        $user->google_id = $request->google_id;
        $user->save();
    }
}
