<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [App\Http\Controllers\PageController::class, 'index'])->name('homepage');

Route::get('/about', [App\Http\Controllers\PageController::class, 'about'])->name('about');

Route::get('/contact', [App\Http\Controllers\PageController::class, 'contact'])->name('contact');

// Route::get(
//     '/',
//     function () {
//         return Inertia::render(
//             'Home',
//             [
//                 'title' => 'Homepage',
//                 'slug' => 'home',
//             ]
//         );
//     }
// )->name( 'homepage' );

// Route::get(
//     '/about',
//     function () {
//         return Inertia::render(
//             'About',
//             [
//                 'title' => 'About',
//                 'slug' => 'about',
//             ]
//         );
//     }
// )->name( 'about' );

// Route::get(
//     '/contact',
//     function () {
//         return Inertia::render(
//             'Contact',
//             [
//                 'title' => 'Contact',
//                 'slug' => 'contact',
//             ]
//         );
//     }
// )->name( 'contact' );

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
