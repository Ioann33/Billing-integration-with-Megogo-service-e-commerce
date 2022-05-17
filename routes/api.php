<?php

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



//Route::get('/{any}', [SpaController::class, 'index'])->where('any','.*');


//Route::get("/get", \App\Http\Controllers\Get2::class);


Route::group(['middleware' => 'auth:sanctum'], function(){

    Route::apiResources([
        'get' => \App\Http\Controllers\Get2::class,
        'balance' => \App\Http\Controllers\Balance::class,
        'userinfo' => \App\Http\Controllers\UserInfo::class,
        'historypay' => \App\Http\Controllers\HistoryPayController::class
    ]);

});



