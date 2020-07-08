<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class loginController extends Controller{
    public function login(Request $request)

    {   

        $input = $request->all();

  

        $this->validate($request, [

            'username' => 'required',

            'password' => 'required',

        ]);

  

        $fieldType = filter_var($request->username, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

        if(auth()->attempt(array($fieldType => $input['username'], 'password' => $input['password'])))
        {

            return redirect('/');

        }else{

            return redirect()->route('login')

                ->with('error','Email-Address And Password Are Wrong.');

        }

}
// {
//     public function login(Request $request){
//         // $request ->validate([
//         //     'email'=>'required|string',
//         //     'password'=>'required|string'
//         // ]);
//         $credentials = ['email'=>$request->email,
//          'password'=>$request->password];
//         if(!Auth::attempt($credentials)){
//             return response()->json(['status'=>false,'message'=>'Username OR password did not matched.'], 200);
//         }
        
//         $accessToken = Auth::user()->createToken('authToken')->accessToken;
//         return response(['user'=> Auth::user(), 'access_token'=>$accessToken]);
//     }
}
