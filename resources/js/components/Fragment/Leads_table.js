import React,{ Fragment } from 'react';
import { MDBBtn,MDBIcon , MDBCard,MDBDataTableV5, MDBCol,MDBCardBody,MDBCardTitle  } from 'mdbreact';

import { Link } from 'react-router-dom'



 function Leads_table() {
    
    
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Name',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Email',
        field: 'email',
        width: 270,
      },
      {
        label: 'Mobile',
        field: 'mobile',
        width: 270,
      },
      {
        label: 'Website',
        field: 'website',
        width: 270,
      },
      {
        label: 'District',
        field: 'district',
        width: 270,
      },

      {
        label: 'Status',
        field: 'status',
        width: 200,
      },
      {
        label: 'Assign',
        field: 'assign',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Owner',
        field: 'owner',
        sort: 'disabled',
        width: 150,
      },
      {
        label: 'Create Date',
        field: 'cdate',
        sort: 'disabled',
        width: 100,
      },
      {
        label: 'Action',
        field: 'action',
        sort: 'disabled',
        width: 100,
      },
    ],
    rows: [
      {
        name: 'Tiger Nixon',
        email: 'nisha@gmail.com',
        mobile: '885895465',
        website: 'www.pataam.com',
        district: 'jashedpur',
        assign: 'Manager',
        owner: 'it scient',
        cdate:'12/06/2020',
        action:'',
      },
      {
        name: 'Tiger Nixon',
        email: 'nisha@gmail.com',
        mobile: '885895465',
        website: 'www.pataam.com',
        district: 'jashedpur',
        assign: 'Manager',
        owner: 'it scient',
        cdate:'12/06/2020',
        action:'',
        
      },
      
     
      
    ],
  });

  return (
      
    <MDBCol>
    <MDBCard>
     
      <MDBCardBody>
        <MDBCardTitle>Leads</MDBCardTitle>
        
       <Link to="/add-lead" className="btn btn-success float-right">Add</Link>
        <MDBDataTableV5
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
     
      pagesAmount={4}
      data={datatable}
      pagingTop
      searchTop
     
       searchBottom={false}
      barReverse
    />
        
      </MDBCardBody>
    </MDBCard>
  </MDBCol>

  
 
  );
}
export default Leads_table;