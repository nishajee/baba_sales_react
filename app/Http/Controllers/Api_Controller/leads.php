<?php

namespace App\Http\Controllers\Api_Controller;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Leaddetail_api;

class leads extends Controller
 {
    function all_leads () {
       
      return response()->json( Leaddetail_api::get(), 200 );
  }
    function leads() {
          return response()->json( Leaddetail_api::paginate(5), 200 );
        // return response()->json( Leaddetail_api::get(), 200 );
    }
     function searchByLeadStatus( Request $request ) {
    return Leaddetail_api::where(['lead_status' => $request->post('lead_status')] )->get();
         // var_dump($request->post('lead_status'));
        // return response()->json( Leaddetail_api::where(['lead_status' =>post('lead_status')] )->get(), 200  );
        // return response()->json( Leaddetail_api::get(), 200 );
    }

   function searchByLeadOwner( Request $request ) {
     // var_dump($request->post('lead_owner'));
    return Leaddetail_api::where(['lead_owner' => $request->post('lead_owner')] )->get();
       
    //     // return response()->json( Leaddetail_api::where(['lead_status' =>post('lead_status')] )->get(), 200  );
    //     // return response()->json( Leaddetail_api::get(), 200 );
    }

  

    public function leadById( $id )
 {
        return response()->json( Leaddetail_api::find( $id ), 200 );
        //200 is response code
    }

    public function leadSave( Request $request )//now we can create object
    {
        $lead = Leaddetail_api::create( $request->all() );
        return response()->json( $lead, 201 );

    }

    public function leadUpdate( Request $request, Leaddetail_api $lead )
 {
     
        $lead->update($request->all());
       
        return response()->json($lead, 200 );
    }

    public function leadDelete( Request $request, Leaddetail_api $lead )
    {
        $lead->delete();
        return response()->json( null, 204 );
    }
}
