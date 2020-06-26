<?php

namespace App\Http\Controllers\Api_Controller;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Userdetail_api;
class user extends Controller
{
    function users(){
    	
    	 return response()->json(Userdetail_api::where('users_role', 3 )->get(),200);

         // return response()->json(Userdetail_api::get(),200);
           }
 public function usersById($id)
           {

              return response()->json(Userdetail_api::find($id),200);//200 is response code
           }
           
           public function usersSave(Request $request)//now we can create object
           
           {
            $uesrs = Userdetail_api::create($request->all());
            return response()->json($country,201);
        
           }
           public function usersUpdate(Request $request,Userdetail_api $users)
           {
              $users->update($request->all());
              return response()->json($users,200);
           }
           public function usersDelete(Request $request,Userdetail_api $users)
        
           {
           $users->delete();
           return response()->json(null,204);
           }
        
}
