<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\RefreshDB\RefreshDBV2::class, 'handle']);
//Route::get('/getOnu', [\App\Http\RefreshDB\Refresh::class, 'getOnu']);
