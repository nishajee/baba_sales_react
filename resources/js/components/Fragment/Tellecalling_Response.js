import React, { Component } from 'react'
import SuccessAlert from './SuccessAlert';
import { Link } from 'react-router-dom';
import { FaBeer, FaEye, FaPhoneSlash, FaBackward, FaIdBadge, FaChevronCircleRight, FaPhoneSquare, FaHistory, FaBook } from 'react-icons/fa';




const now = new Date();
class Tellecalling_Response extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            calls: [],
            id: '',
            first_name: '',
            last_name: '',
            mobile: '',
            email: '',
            lead_id: '', response_status: '', user_name: '', user_mobile: '',
            availiblity_date: '', availibility_time: '',date:'',time:'',skype:'',zoom:'',
            anydesk:'',google:'',
        }
        this.inputChange = this.inputChange.bind(this);
        this.handelFormSubmit = this.handelFormSubmit.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
    }

    inputChange(e) {
        console.log("input type working");
        const now = new Date();
        const dateFormate = now.toLocaleDateString();
        const timeFormate = now.toLocaleTimeString();

        this.setState({
            [e.target.name]: e.target.value,
            dateFormate: dateFormate,
            timeFormate:timeFormate

        });
    }

    handelFormSubmit(event) {
      
        event.preventDefault();
       
        axios.post('/api/response', {
            time:this.state.timeFormate,
            date: this.state.dateFormate,
            lead_id: this.state.id,
            response_status: this.state.response_status,
            user_name: this.state.user_name,
            user_mobile: this.state.user_mobile,
            availiblity_date: this.state.availiblity_date,
            availibility_time: this.state.availibility_time,
        }).then(response => {
            this.setState({
                alert_message: "success"
            })
            this.props.history.push('/tellicalling');
        }).catch(err => console.log(err));


    }
    handelSubmit(event) {
        event.preventDefault();
        axios.post('/api/Busyresponse', {
            date: this.state.dateFormate,
            time:this.state.timeFormate,
            skype:this.state.skype,
            zoom:this.state.zoom,
            anydesk:this.state.anydesk,
            google:this.state.google,
            lead_id: this.state.id,
            response_status: this.state.response_status,
            user_name: this.state.user_name,
            user_mobile: this.state.user_mobile,
            availiblity_date: this.state.availiblity_date,
            availibility_time: this.state.availibility_time,
        }).then(response => {
            this.setState({
                response_status: '',
                alert_message: "success"
            })
            this.props.history.push('/tellicalling');
        }).catch(err => console.log(err));

    }
    componentDidMount() {
        const id = this.props.match.params.id
        console.log(id);
        console.log('callled  view leads calls ');
        // axios.get(`/api/contact/${id}/edit`)
        axios.get(`/api/leads/${id}`)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    email: response.data.email,
                    mobile: response.data.mobile,
                })
            }).catch(err => console.log(err));

        axios.get(`/api/response/${id}`).then(response => {
            this.setState({
                calls: response.data

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
        var now = new Date();
        return (
            <div>
                {this.state.alert_message == "success" ? <SuccessAlert message={"Lead data Updated Successfully"} /> : null}
                <div className="card border-primary">
                    <div className="card-header primary">
                        <div className="row">
                            <div className="col-md-9">
                                <h5>Put Response</h5>
                            </div>
                            <div className="col-md-3">
                                <Link to="/tellicalling" style={{ color: "black", marginTop: "-5px", fontSize: "1.2em", paddingRight: "10px" }}><FaBackward /> Back &nbsp;</Link>
                                <Link data-toggle="modal" data-target="#callHistory" style={{ color: "#3490dc;", fontSize: "1.2em" }}>|&nbsp; <FaBook />History </Link>
                            </div>
                        </div>



                    </div>
                    <div className="card-body">
                        <table>
                            <th>DETAILS</th>
                            <tr>
                                <td>Name: </td>
                                <td>{this.state.first_name} {" "} {this.state.last_name}</td>
                            </tr>
                            <tr>
                                <td><FaPhoneSlash /></td>
                                <td>{this.state.mobile}</td>
                            </tr>
                            <tr>
                                <td><FaIdBadge /></td>
                                <td>{this.state.email}</td>
                            </tr>
                        </table>



                    </div>
                    <form onSubmit={this.handelFormSubmit}>
                        <input type="hidden" onChange={this.inputChange} name="lead_id" value={this.state.id} />
                        
                        <input type="hidden" onChange={this.inputChange} name="date" value={this.state.dateFormate} />
                        <input type="hidden" onChange={this.inputChange} name="time" value={this.state.timeFormate} />
                        <div class="row" style={{ padding: "2px 0px 0px 0px" }}>

                            <div class="col-md-2" style={{ marginLeft: "10px" }}>
                                <label class="radio-inline" style={{ marginRight: "10px", marginRight: "10px" }}>
               
                                    <input type="radio" value={this.state.response_status} value="Didn't Pick"
                                        onChange={this.inputChange} name="response_status"
                                        style={{ marginRight: "10px", marginRight: "10px" }} />Didn't Pick
                                               </label>

                            </div>
                            <div class="col-md-2">
                                <label class="radio-inline" style={{ marginRight: "10px", marginRight: "10px" }}>
                                    <input type="radio" value={this.state.response_status} value="Invalid Number"
                                        onChange={this.inputChange} name="response_status"
                                        value="Invalid Number" style={{ marginRight: "10px", marginRight: "10px" }} />Invalid Number
                                                   </label>

                            </div>
                            <div class="col-md-2">
                                <label class="radio-inline" style={{ marginRight: "10px", marginRight: "10px" }}>
                                    <input type="radio" value={this.state.response_status} value="Set a Call - Demo"
                                        onChange={this.inputChange} data-toggle="modal" data-target="#exampleModal" name="response_status" style={{ marginRight: "10px", marginRight: "10px" }} />Set a Call - Demo
                                                          </label>

                            </div>

                            <div class="col-md-3">
                                <label class="radio-inline" style={{ marginRight: "10px", marginRight: "10px" }}>
                                    <input type="radio" value={this.state.response_status} value="Busy With Someone Else"
                                        onChange={this.inputChange}
                                        style={{ marginRight: "10px", marginRight: "10px" }}  name="response_status"  />Busy With Someone Else.
                                </label>  </div>
                            <div class="col-md-2">
                            <label class="radio-inline" style={{ marginRight: "10px", marginRight: "10px" }}>
               
                            <input type="radio" value={this.state.response_status} value="Not Interested"
                                onChange={this.inputChange} name="response_status"
                                style={{ marginRight: "10px", marginRight: "10px" }} />Not Interested
                                       </label>

                                


                            </div>
                            <input type="hidden" onChange={this.inputChange} name="date" value={this.state.dateFormate} />
                        <input type="hidden" onChange={this.inputChange} name="time" value={this.state.timeFormate} />
                        </div>


                        <button type="submit" style={{ marginLeft: "5px", backgroundColor: "#317eeb" }} className="btn btn-primary">Submit Response </button> <br /><br />

                    </form>

                </div>
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header" style={{ backgroundColor: "#abc7e4" }}>
                                <h5 className="modal-title" id="exampleModalLabel">Fill Details</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.handelSubmit}>
                                    <input type="hidden" value={this.state.response_status} value="Set a Call - Demo"
                                        onChange={this.inputChange} data-toggle="modal" data-target="#exampleModal" name="response_status" style={{ marginRight: "10px", marginRight: "10px" }} />


                                    <div className="form-group">
                                        <label>Name <span style={{ color: "red" }}>*</span></label>
                                        <input defaultValue="Null" value={this.state.user_name}
                                            onChange={this.inputChange} type="text" className="form-control" placeholder="Enter Name" name="user_name" required />
                                    </div>

                                    <input type="hidden" name="lead_id" value={this.state.id} />

                                    <div className="form-group">
                                        <label>Contact No. <span style={{ color: "red" }}>*</span></label>
                                        <input type="text"
                                            value={this.state.user_mobile}
                                            onChange={this.inputChange} defaultValue="Null" className="form-control" placeholder="contact No." name="user_mobile" required />
                                    </div>

                                    <div className="form-group">
                                        <label> Skype ID.</label>
                                        <input type="text"
                                            value={this.state.skype}
                                            onChange={this.inputChange} defaultValue="Null" className="form-control" placeholder="Skype Id." name="skype"/>
                                    </div>

                                    <div className="form-group">
                                        <label>Zoom ID</label>
                                        <input type="text"
                                            value={this.state.zoom}
                                            onChange={this.inputChange} defaultValue="Null" className="form-control" placeholder="Zoom Id" name="zoom"  />
                                    </div>

                                    <div className="form-group">
                                        <label>Anydesk ID</label>
                                        <input type="text"
                                            value={this.state.anydesk}
                                            onChange={this.inputChange} defaultValue="Null" className="form-control" placeholder="Anydesk no." name="anydesk"  />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>Google ID <span style={{ color: "red" }}>*</span></label>
                                        <input type="text"
                                            value={this.state.google}
                                            onChange={this.inputChange} className="form-control" placeholder="Google Id" name="google" required />
                                    </div>


                                    <div className="form-group">
                                        <label>Availibility Date<span style={{ color: "red" }}>*</span></label>
                                        <input type="date" value={this.state.availiblity_date}
                                            onChange={this.inputChange} className="form-control" name="availiblity_date" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Availibility Time <span style={{ color: "red" }}>*</span></label>
                                        <input type="time" value={this.state.availibility_time} onChange={this.inputChange}
                                            className="form-control" name="availibility_time" required />
                                    </div>



                                    <div class="modal-footer" style={{ backgroundColor: "#abc7e4" }}>
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="submit" class="btn btn-primary">Submit Details</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>


                </div>
                {/* call history modal  */}

                <div class="modal fade" id="callHistory" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header" style={{ backgroundColor: "#abc7e4" }}>
                                <h5 class="modal-title" id="exampleModalLabel">Call History</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div class="modal-body">

                                <div>
                                    <strong>History</strong>

                                    <table className="table table-striped">
                                        <thead>
                                            <tr>

                                                <th>Date</th>
                                                <th>Time</th>
                                                <th>Status</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.calls !== null
                                                ? this.state.calls.map(call => (

                                                    <tr key={call.id}>

                                                        <td>{call.date}</td>
                                                        <td>{call.time}</td>
                                                        <td>{call.response_status}</td>

                                                    </tr>
                                                ))
                                                :
                                                null
                                            }


                                        </tbody>
                                    </table>

                                </div>

                            </div>
                            <div class="modal-footer" style={{ backgroundColor: "#abc7e4" }}>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
export default Tellecalling_Response;