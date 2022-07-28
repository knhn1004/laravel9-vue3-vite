<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/404', function () {
    return abort(404);
});

Route::get('{any}', function () {
    return view('storefront.index');
})
    ->where('any', '^(?!api/|404).*$')
    ->name('storefront.index');