<?php


use App\Http\Controllers\UsmBillingController;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;

Route::middleware('check.ip')->group(function (){

    Route::get('/getSystemInformation', [UsmBillingController::class, 'getSystemInformation']);
    Route::get('/getTariffList', [UsmBillingController::class, 'getTariffList']);
    Route::get('/getServicesList', [UsmBillingController::class, 'getServicesList']);
    Route::get('/getUserStateList', [UsmBillingController::class, 'getUserStateList']);

});




