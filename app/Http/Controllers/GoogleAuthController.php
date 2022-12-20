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
            'avatar'=>'required',
        ]);
        $user_id = Auth::id();
        $user = User::findOrFail($user_id);
        $user->email = $request->email;
        $user->google_id = $request->google_id;
        $user->avatar = $request->avatar;
        $user->save();
    }

    public function getGoogleAccount(): \Illuminate\Http\JsonResponse
    {
        $googleAccount = User::query()
            ->select(['google_id', 'email', 'avatar'])
            ->where('id_user', Auth::id())
            ->first();

        return response()->json($googleAccount);
    }

    public function removeGoogleAccount(){
        $user_id = Auth::id();
        $user = User::findOrFail($user_id);
        $user->google_id = '';
        $user->avatar = '';
        $user->save();
    }
}
