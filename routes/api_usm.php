<?php


use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;

Route::middleware('check.ip')->group(function (){

    Route::get('/getSystemInformation', [\App\Http\Controllers\UsmBillingController::class, 'getSystemInformation']);
    Route::get('/getTariffList', [\App\Http\Controllers\UsmBillingController::class, 'getTariffList']);

});




