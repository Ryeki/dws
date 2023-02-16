<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [App\Http\Controllers\PageController::class, 'index'])->name('homepage');

Route::get('/about', [App\Http\Controllers\PageController::class, 'about'])->name('about');

Route::get('/contact', [App\Http\Controllers\PageController::class, 'contact'])->name('contact');
Route::post('/contact', [App\Http\Controllers\PageController::class, 'contactSubmit'])->name('contactSubmit');

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
