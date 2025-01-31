<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ComposteraController;
use App\Http\Controllers\Api\RegistroController;
use App\Http\Controllers\Auth\RegisteredUserController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('dashboard', [ComposteraController::class, 'store'])
    ->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('nuevaCompostera', [ComposteraController::class, 'create'])
    ->middleware('can:administrate,App\Models\User');

Route::get('estadisticas', [ComposteraController::class, 'mostrarEstadisticas'])
    ->name('estadisticas')
    ->middleware(['verified', 'auth:sanctum']);

Route::get('registro', [ComposteraController::class, 'mostrarRegistro'])
    ->name('registro')
    ->middleware(['verified', 'auth:sanctum']);

Route::get('registros', [RegistroController::class, 'mostrarRegistros'])
    ->name('registros')
    ->middleware(['verified', 'auth:sanctum']);

Route::resource('users', UserController::class)
    ->middleware('can:administrate,App\Models\User');

Route::get('register', [RegisteredUserController::class, 'create'])
    ->name('register')
    ->middleware('can:administrate,App\Models\User');

Route::post('register', [RegisteredUserController::class, 'store']);

require __DIR__ . '/auth.php';
