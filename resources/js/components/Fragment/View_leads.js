import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ReactSearchBox from 'react-search-box';
import SearchField from 'react-search-field';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Modal from 'react-bootstrap/Modal'
import ModalExample from './ModalExample';
import { FaBeer, FaEye, FaEdit } from 'react-icons/fa';
import Note_modal from './Note_modal';
import Attachment_modal from './Attachment_modal';
import New_leadtask from './New_leadtask';
import New_leadEvent from './New_leadEvent';
import Lead_email from './Lead_email';
import Add_leadReminder from './Add_leadReminder';
import Add_Notes from './Add_Notes';
import Add_attachment from './Add_attachment';

class View_leads extends Component {


  constructor(props) {
    super(props)
    this.state = {
      call:true,
      task:true,
      event:true,
      email:true,
      reminder:true,
      callsdata:[],
      tasksdata:[],
      eventdata:[],
      emaildata:[],
      reminderdata:[],

      id: '',
      first_name: '', last_name: '', email: '', mobile: '', lead_status: '', phone: '', website: '',
      company_name: '', n_o_employee: '', fax: '', lead_status: '', lead_owner: '', annual_revenue: '', rating: '', lead_source: '',
      industry: '', linkedIn_id: '', linkedIn_url: '', address1: '', city_distt: '', head_quater: '', apperance_in_country: '',
      state_province: '', pincode: '', country: '', description: '',
      // leads: []
      

    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    console.log(id);
    console.log('callled  view leads ');
    // axios.get(`/api/contact/${id}/edit`)
    axios.get(`http://localhost/baba_sales_react/api/leads/${id}`)
      .then(response => {
        this.setState({
          id: response.data.id,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          email: response.data.email,
          mobile: response.data.mobile,
          lead_status: response.data.lead_status,
          phone: response.data.phone,
          website: response.data.website,
          company_name: response.data.company_name,
          n_o_employee: response.data.n_o_employee,
          fax: response.data.fax,
          lead_status: response.data.lead_status,
          lead_owner: response.data.lead_owner,
          annual_revenue: response.data.annual_revenue,
          rating: response.data.rating,
          lead_source: response.data.lead_source,
          industry: response.data.industry,
          linkedIn_id: response.data.linkedIn_id,
          linkedIn_url: response.data.linkedIn_url,
          address1: response.data.address1,
          city_distt: response.data.city_distt,
          head_quater: response.data.head_quater,
          apperance_in_country: response.data.apperance_in_country,
          state_province: response.data.state_province,
          pincode: response.data.pincode,
          country: response.data.country,
          description: response.data.description,
          // leads: response.data

        })
      }).catch(err => console.log(err));
     
      axios.get(`http://localhost/baba_sales_react/api/calls/${id}`)
      .then(response => {
               this.setState({
          callsdata: response.data
        })
      }).catch(err => console.log(err));
  
  axios.get(`http://localhost/baba_sales_react/api/tasks/${id}`)
  .then(response => {
           this.setState({
      tasksdata: response.data
    })
  }).catch(err => console.log(err));

axios.get(`http://localhost/baba_sales_react/api/events/${id}`)
.then(response => {
         this.setState({
          eventdata: response.data
  })
}).catch(err => console.log(err));

axios.get(`http://localhost/baba_sales_react/api/email/${id}`)
.then(response => {
         this.setState({
          emaildata: response.data
  })
}).catch(err => console.log(err));
}


  render() {
    return (
      <div>
  {this.state.alert_message=="success"?<SuccessAlert message={"Lead data Updated Successfully"}/>:null}
        <Card>
          <Card.Header>
            <Card.Subtitle className="mb-2 text-muted"><Row>
              <Col md={10}> <h5><strong>Leads Information</strong></h5></Col>
              <Col md={2}> <Link to="/" style={{backgroundColor: '#317eeb',color: 'white',}} className="btn btn-primary">Back</Link></Col>
            </Row></Card.Subtitle>
          </Card.Header>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              <Row><Col md={2}><h4>{this.state.first_name} {" "} {this.state.last_name}</h4></Col>

                <Col md={2}><h4>
                  <Link to={`/leads/${this.state.id}/edit`}><span style={{ color: "blue" }}><FaEdit /></span></Link></h4></Col></Row>
            </Card.Subtitle>
            <p>{this.state.email} {" "} {" "}  {this.state.mobile}</p>

            <b><p style={{ color: '#1E4CBD' }}>Status:  {" "} {this.state.lead_status}</p></b>



          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Body>   <Card.Subtitle className="mb-2 text-muted">Leads Details
                  </Card.Subtitle><br />
            <Table striped bordered hover size="sm">

              <tbody>

                <tr>

                  <th>Name : {this.state.first_name}</th>
                  <th>Phone : {this.state.phone}  </th>

                </tr>
                <tr>
                  <th>Email : {this.state.email}</th>
                  <th>Mobile : {this.state.mobile}</th>
                </tr>
                <tr>
                  <th>Website :{this.state.website}</th>
                  <th>Company : {this.state.company_name}  </th>
                </tr>
                <tr>
                  <th>Fax :{this.state.fax}</th>
                  <th>No. Of Employees :{this.state.n_o_employee} </th>
                </tr>
                <tr>
                  <th>Lead Owner :{this.state.lead_owner}</th>
                  <th>Lead Status : {this.state.lead_status}  </th>
                </tr>
                <tr>
                  <th>Rating : {this.state.rating} </th>
                  <th>Annual Revenue :{this.state.annual_revenue} </th>
                </tr>
                <tr>
                  <th>Lead Source :{this.state.lead_source}</th>
                  <th>Industry: {this.state.industry} </th>
                </tr>
                <tr>
                  <th>LinkedIn Id :{this.state.linkedIn_id} </th>
                  <th>LinkedIn Url :{this.state.linkedIn_url} </th>

                </tr>


              </tbody>

            </Table>
          </Card.Body></Card>
        <br />
        <Card>
          <Card.Body>   <Card.Subtitle className="mb-2 text-muted">Address Details
                   </Card.Subtitle><br />

            <Table striped bordered hover size="sm">

              <tbody>
                <tr>
                  <th>Address : {this.state.address1}</th>
                  <th>City : {this.state.city_distt} </th>

                </tr>
                <tr>
                  <th>Head Quater :{this.state.head_quater}</th>
                  <th>Apperance in country :{this.state.apperance_in_country}  </th>
                </tr>
                <tr>
                  <th>State :{this.state.state_province}</th>
                  <th>Zip/Postal Code : {this.state.pincode}  </th>
                </tr>
                <tr>
                  <th>Country :{this.state.country}</th>
                  <th>Description :{this.state.description}   </th>
                </tr>


              </tbody>
            </Table>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <br />

          <div className="row">
            
            <div className="col-md-6">
              <ul class="nav nav-tabs">
     
                <li class="active"><a class="btn btn-outline-info active" data-toggle="tab" href="#home">calls</a></li>
                <li><a class="btn btn-outline-info" data-toggle="tab" href="#menu1">Tasks</a></li>
                <li><a class="btn btn-outline-info" data-toggle="tab" href="#menu2">Events</a></li>
                <li><a class="btn btn-outline-info" data-toggle="tab" href="#menu3">Emails</a></li>
                <li><a class="btn btn-outline-info" data-toggle="tab" href="#menu4">Reminders</a></li>
              </ul>

            </div>

         
            <div className="col-md-6">
            
  <button type="button"  className="btn btn-primary pull-right" style={{
                backgroundColor: '#317eeb', color: 'white'
              }} data-toggle="modal" data-target="#myModal"> New call</button>
  
 
     
        <button type="button" className="btn btn-primary pull-right" style={{
                backgroundColor: '#317eeb', color: 'white'
              }} data-toggle="modal" data-target="#myTask"> New Tasks</button>
       
          
              <button type="button" className="btn btn-primary pull-right" style={{
                backgroundColor: '#317eeb',
                color: 'white'
              }} data-toggle="modal" data-target="#myEvent">New Event </button>
            
           
                <button type="button" className="btn btn-primary pull-right" style={{
                backgroundColor: '#317eeb',
                color: 'white'
              }} data-toggle="modal" data-target="#myEmail">New Email</button>
         
           
                <button type="button" className="btn btn-primary pull-right" style={{
                backgroundColor: '#317eeb',
                color: 'white'
              }} data-toggle="modal" data-target="#myReminder">Add Reminder</button>
                 
              
              <New_leadtask cust_id={this.state.id} />
              <ModalExample cust_id={this.state.id}/>
              <New_leadEvent cust_id={this.state.id} />
              <Lead_email cust_id={this.state.id} />
              <Add_leadReminder cust_id={this.state.id}/>
            </div>
          </div>
          <br />
          <div className="tab-content">
                        <div id="home" className="tab-pane fade active show">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Subject</th>
                                        <th>	Call Stage</th>
                                        <th>	Activity</th>
                                        <th>	Call Details</th>
                                        <th>Call Duration</th>
                                        <th>	Lead Name</th>
                                        <th>	Description</th>
                                        <th>	Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.callsdata !== null
                  ? this.state.callsdata.map(data => (
                               
                                  <tr key={data.id}>
                                        <td>{data.subject}</td>
                                        <td>{data.call_stage}</td>
                                        <td>{data.call_purpose}</td>
                                        <td>{data.call_details}</td>
                                        <td></td>
                                        <td>{this.state.first_name} {" "} {this.state.last_name}</td>
                                        <td>{data.call_description}</td>
                                        <td><Link to=""><span style={{ color: "blue" }}><FaEdit /></span></Link></td>
                                    </tr>

         ))
         :
         null
                                }
                 

                                </tbody>
                            </table>
                        </div>
                        <div id="menu1" className="tab-pane fade">
                            <table className="table">
                                <thead>
                            
                                    <tr>
                                    <th>Subject</th>
                                        <th>Due Date</th>
                                        <th>Status</th>
                                        <th>Lead Name</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                {Array.isArray(this.state.tasksdata) && this.state.tasksdata.map(task => (
                                    <tr key={task.id}>
                                        <td>{task.subject}</td>
                                        <td>{task.due_date}</td>
                                        <td>{task.taskstatus}</td>
                                        <td>{this.state.first_name} {" "} {this.state.last_name}</td>
                                        <td>{task.task_description}</td>
                                        <td><Link to=""><span style={{ color: "blue" }}><FaEdit /></span></Link></td>
                                        
                                    </tr>
                                ))}

                                </tbody>
                            </table>
                        </div>
                        <div id="menu2" className="tab-pane fade">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Subject</th>
                                        <th>Description</th>
                                        <th>Start Date-Time</th>
                                        <th>End Date-Time</th>
                                        <th>Location</th>
                                        <th>Status</th>
                                        <th>Lead Name</th>
                                        <th>Description</th>
                                        <th>Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                {Array.isArray(this.state.eventdata) && this.state.eventdata.map(event   => (
                                    <tr key={event.id}>
                                        <td>{event.subject}</td>
                                        <td>{event.event_description}</td>
                                        <td>{event.start_date_time}</td>
                                        <td>{event.location}</td>
                                        <td></td>
                                        <td>{this.state.first_name} {" "} {this.state.last_name}</td>
                                        <td>{event.location}</td>
                                         <td><Link to=""><span style={{ color: "blue" }}><FaEdit /></span></Link></td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <div id="menu4" className="tab-pane fade">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Subject</th>
                                        <th>Message</th>
                                        <th>Rec-ID</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                        

                                    </tr>
                                </thead>
                                <tbody>
                                {Array.isArray(this.state.emaildata) && this.state.emaildata.map(email => (
                                    <tr>
                                    <td>{this.state.first_name} {" "} {this.state.last_name}</td>
                                        <td>{email.email}</td>
                                        <td>{email.subject}</td>
                                        <td>{email.message}</td>
                                        <td></td>
                                        <td>{email.email_description}</td>
                                        <td><Link to=""><span style={{ color: "blue" }}><FaEdit /></span></Link></td>
                                        
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <div id="menu4" class="tab-pane fade">
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th>Reminder Name</th>
                                        <th>Reminder Status</th>
                                        <th>Reminder Date</th>
                                        <th>Time</th>
                                        <th>Description</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                       
                                        
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
        </Card>
        <br />

        <br />
        <Row>
          <Col md={6}>
            <Card>
              <div className="container" >
                <Row>

                  <Col md={9}><h5 style={{ color: "grey", marginTop: "10px" }}><b>Notes</b></h5></Col>
                  <Col md={3}>
                    <button type="button" className="btn btn-primary pull-right" style={{
                      backgroundColor: '#317eeb',
                      color: 'white', marginTop: "10px"
                    }} data-toggle="modal" data-target="#myNotes">Add Notes</button>
                    <Add_Notes cust_id={this.state.id}/>

                    <br />
                  </Col>




                  <Table striped bordered hover size="sm" style={{ marginTop: "10px" }}>

                    <tbody>
                      <tr>
                        <th>Titles</th>
                        <th>Notes  </th>
                        <th>Created Date</th>

                      </tr>
                      <tr>
                        <td></td>
                        <td> </td>
                        <td></td>
                      </tr>

                    </tbody>
                  </Table>



                </Row>
              </div>
            </Card>
          </Col>

          <Col md={6}>
            <Card>
              <div className="container">
                <Row>
                  <Col md={8}><h5 style={{ color: "grey", marginTop: "10px" }}><b>Attachments/Files</b></h5></Col>
                  <Col md={4}>
                    <button type="button"  style={{width:"120%"}}className="btn btn-primary pull-right" style={{
                      backgroundColor: '#317eeb',
                      color: 'white', marginTop: "10px"
                    }} data-toggle="modal" data-target="#attachment">Add Attachments</button>
                    <Add_attachment cust_id={this.state.id}/>

                    {/* <Link to="" style={{
                    backgroundColor: 'teal',
                    color: 'white', marginTop: "10px"
                  }} className="btn btn-primary">Add Attachments</Link> */}
                    <br />
                  </Col>




                  <Table striped bordered hover size="sm" style={{ marginTop: "10px" }}>

                    <tbody>
                      <tr>
                        <th>Titles</th>
                        <th>Attachments  </th>
                        <th>Created Date</th>

                      </tr>
                      <tr>
                        <td></td>
                        <td> </td>
                        <td> </td>
                      </tr>

                    </tbody>
                  </Table>





                </Row>
              </div>
            </Card>
          </Col>
        </Row>




      </div>
    )
  }
}

export default View_leads;
