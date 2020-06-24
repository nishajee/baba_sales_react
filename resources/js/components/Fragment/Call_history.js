import React, { Component } from 'react'

class Call_history extends Component {
  constructor(props){
    super(props)
    this.state={
    
      leads_response: []
    // lead_id:'', response_status:'', user_name:'', user_mobile:'', availiblity_date:'', availibility_time:'',
  }
}
componentDidMount(){
  const id = this.props.match.params.id
  console.log(id);
   console.log('call History page working');

  axios.get(`http://localhost/baba_sales/api/Busyresponse/${id}`).then(response => {
      this.setState({
        leads_response:response.data.leads_response,
          // lead_id:response.data.lead_id,
          //  response_status:response.data.response_status,
          //  user_name:response.data.user_name, 
          // user_mobile:response.data.user_mobile,
          //  availiblity_date:response.data.availiblity_date,
          //   availibility_time:response.data.availibility_time,
         
      })
  }).catch(err => console.log(err));

}
    render() {
        return (
            <div>
    

<div class="modal fade" id="callHistory" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header" style={{ backgroundImage: "linear-gradient(to bottom, #000099 0%, #009999 100%)"}}>
        <h5 class="modal-title" id="exampleModalLabel">Call History</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      
    <div class="modal-body" style={{ backgroundImage: "linear-gradient(to top, #00ffcc 0%, #ccffff 100%)"}}>
   
    <div>
    <strong> Call History</strong>
{/* 
   <table>
    <thead>
    <tr>
      <th>Name</th>
      </tr>
    </thead>
      <tbody>
      {this.state.leads_response !== null
                  ? this.state.leads_response.map(data => (
      
      <tr key={data.id}>
      <td>{data.user_name}</td>
      </tr>
      ))
                  :
                  null
                }

       
      </tbody>
    </table> */}
  
</div>
  
      </div>
      <div class="modal-footer" style={{ backgroundImage: "linear-gradient(to bottom, #000099 0%, #009999 100%)"}}>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>  
            </div>
        )
    }
}
export default Call_history;