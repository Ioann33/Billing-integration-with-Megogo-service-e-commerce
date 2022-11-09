<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\RefreshDB\Refresh::class, 'handle']);
//Route::get('/getOnu', [\App\Http\RefreshDB\Refresh::class, 'getOnu']);
