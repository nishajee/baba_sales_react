<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/contacts','Contactcontroller@index');
Route::post('/contact/create','Contactcontroller@create');
Route::get('/contact/{id}/edit','Contactcontroller@edit');
Route::put('/contact/{id}/update','Contactcontroller@update');
Route::get('/contact/{id}/delete','Contactcontroller@delete');
Route::post('login',[AccessTokenController::class,'issueToken'])
->middleware(['api-login','throttle']);
// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

