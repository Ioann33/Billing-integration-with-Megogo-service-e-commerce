<?php


use App\Http\Controllers\UsmBillingController;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;

Route::middleware('check.ip')->group(function (){

    Route::get('/getSystemInformation', [UsmBillingController::class, 'getSystemInformation']);
    Route::get('/getTariffList', [UsmBillingController::class, 'getTariffList']);
    Route::get('/getServicesList', [UsmBillingController::class, 'getServicesList']);
    Route::get('/getUserStateList', [UsmBillingController::class, 'getUserStateList']);
    Route::get('/getUserList', [UsmBillingController::class, 'getUserList']);
    Route::get('/getUserTags', [UsmBillingController::class, 'getUserTags']);
    Route::get('/getUserMessages', [UsmBillingController::class, 'getUserMessages']);
    Route::get('/getCityList', [UsmBillingController::class, 'getCityList']);
    Route::get('/getStreetList', [UsmBillingController::class, 'getStreetList']);
    Route::get('/getHouseList', [UsmBillingController::class, 'getHouseList']);

});




