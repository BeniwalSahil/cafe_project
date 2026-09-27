<?php

use App\Http\Controllers\CafeController;
use Illuminate\Support\Facades\Route;

Route::get('/menu', [CafeController::class, 'menu']);
Route::post('/reservations', [CafeController::class, 'reserve']);
