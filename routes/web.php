<?php

use App\Http\Controllers\SearchController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'home')->name('home');
Route::inertia('/search', 'search')->name('search');
Route::get('/search/results', [SearchController::class, 'index'])->name('search.results');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    // Route::inertia('tester', 'tester')->name('tester');
});

require __DIR__.'/settings.php';
