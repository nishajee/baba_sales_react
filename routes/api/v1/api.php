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
Route::middleware('auth:api')->group(function (Request $request) {
    Route::get('leads','APi_Controller\leads@leads');
    Route::get('leads/{id}','APi_Controller\leads@leadById');
    Route::post('leads','APi_Controller\leads@leadSave');
    Route::put('leads/{country}','APi_Controller\leads@leadUpdate');
    Route::delete('leads/{country}','APi_Controller\leads@leadDelete');
    Route::post('leadsByStatus','APi_Controller\leads@searchByLeadStatus');
    Route::post('leadsByOwner','APi_Controller\leads@searchByLeadOwner');
    
    
    Route::get('calls','APi_Controller\Call_leadController@Leadcalls');
    Route::get('calls/{id}','APi_Controller\Call_leadController@CallById');
    Route::post('calls','APi_Controller\Call_leadController@CallSave');
    Route::put('calls/{call}','APi_Controller\Call_leadController@CallUpdate');
    Route::delete('calls/{call}','APi_Controller\Call_leadController@CallDelete');
    
    Route::get('tasks','APi_Controller\TaskController@LeadTask');
    Route::get('tasks/{id}','APi_Controller\TaskController@TaskById');
    Route::post('tasks','APi_Controller\TaskController@TaskSave');
    Route::put('tasks/{task}','APi_Controller\TaskController@TaskUpdate');
    Route::delete('tasks/{task}','APi_Controller\TaskController@TaskDelete');
    
    Route::get('users','APi_Controller\user@users');
    Route::get('users/{id}','APi_Controller\user@usersById');
    Route::post('users','APi_Controller\user@usersSave');
    Route::put('users/{user}','APi_Controller\user@usersUpdate');
    Route::delete('users/{user}','APi_Controller\user@usersDelete');
    
    Route::get('events','APi_Controller\EventController@events');
    Route::get('events/{id}','APi_Controller\EventController@eventById');
    Route::post('events','APi_Controller\EventController@eventSave');
    Route::put('events/{user}','APi_Controller\EventController@eventUpdate');
    Route::delete('events/{user}','APi_Controller\EventController@eventDelete');
    
    Route::get('email','APi_Controller\EmialController@emails');
    Route::get('email/{id}','APi_Controller\EmialController@emailById');
    Route::post('email','APi_Controller\EmialController@emailSave');
    Route::put('email/{email}','APi_Controller\EmialController@emaillUpdate');
    Route::delete('email/{email}','APi_Controller\EmialController@emailDelete');
    
    Route::get('reminders','APi_Controller\ReminderController@reminders');
    Route::get('reminders/{id}','APi_Controller\ReminderController@reminderById');
    Route::post('reminders','APi_Controller\ReminderController@reminderSave');
    Route::put('reminders/{reminder}','APi_Controller\ReminderController@reminderUpdate');
    Route::delete('reminders/{reminder}','APi_Controller\ReminderController@reminderDelete');
    
    
    Route::get('notes','APi_Controller\NoteController@notes');
    Route::get('notes/{id}','APi_Controller\NoteController@noteById');
    Route::post('notes','APi_Controller\NoteController@noteSave');
    Route::put('notes/{note}','APi_Controller\NoteController@noteUpdate');
    Route::delete('notes/{note}','APi_Controller\NoteController@noteDelete');
    
    Route::get('attachments','APi_Controller\AttachmentController@attachments');
    Route::get('attachments/{id}','APi_Controller\AttachmentController@attachmentById');
    Route::post('attachments','APi_Controller\AttachmentController@attachmentSave');
    Route::put('attachments/{attachment}','APi_Controller\AttachmentController@attachmentUpdate');
    Route::delete('attachments/{attachment}','APi_Controller\AttachmentController@attachmentDelete');
    
    Route::get('response','APi_Controller\ResponseController_api@response_details');
    Route::get('response/{id}','APi_Controller\ResponseController_api@responseById');
    Route::post('response','APi_Controller\ResponseController_api@responseSave');
    Route::put('response/{resp}','APi_Controller\ResponseController_api@responseUpdate');
    Route::delete('response/{resp}','APi_Controller\ResponseController_api@responseDelete');
    
    Route::get('Busyresponse','APi_Controller\BusyResponseController@Busyresponse_details');
    Route::get('Busyresponse/{id}','APi_Controller\BusyResponseController@BusyresponseById');
    Route::post('Busyresponse','APi_Controller\BusyResponseController@BusyresponseSave');
    Route::put('Busyresponse/{bresp}','APi_Controller\BusyResponseController@BusyresponseUpdate');
    Route::delete('Busyresponse/{bresp}','APi_Controller\BusyResponseController@BusyresponseDelete');
//     return $request->user();
});



//users login
