<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;


//Route::get('/', function () {
//    return view('index');
//});
//
//Route::get('/login', function () {
//    return view('index');
//});



Auth::routes();

//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/{any}', function (){
    return view('index');
})->where('any', '.*');





