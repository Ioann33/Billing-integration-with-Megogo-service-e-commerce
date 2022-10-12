<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\RefreshDB\Refresh::class, 'handle']);
