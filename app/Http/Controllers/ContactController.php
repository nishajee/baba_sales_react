<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;
use DB;
class ContactController extends Controller
{
     //fetch all data from contact
    public function index(){
           $contacts=Contact::all();
          
        //    print_r($contacts);
        //    exit;
         return response()->json($contacts);
    }
   
    //create that means insert data 
    public function create(Request $request){
        $contacts=Contact::create([
            'name'=>$request->name,
            'tel'=>$request->tel,
        ]);
        return response()->json($contacts);
    }
    //display contact edit form
    public function edit($id){
$contacts=Contact::find($id);
return response()->json($contacts,200);


    }
    //update
public function update(Request $request,$id)
{
   $contacts = Contact::find($id)->update([
    'name'=>$request->name,
    'tel'=>$request->tel,
]);
   return response()->json($contacts);
}

public function delete($id){
    $contacts=Contact::find($id)->delete();
    return response()->json($contacts);

}
}
