import React, { Component } from 'react';
import View_leads from './View_leads';

class ModalExample extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      Complete: true,
      Schedule: true,
      cust_id: '',
      call_description: '',
      org_id: '',
      subject: '',
      owner_id: '',
      call_purpose: '',
      call_stage: '',
      phone: '',
      calltype: '',
      call_details: '', call_timer: '', call_start_time: '', schedule_time: '',
      owner: '', minute: '', second: '', created_by: '', created_at: '', updated_at: '', deleted_by: '',
      deleted_at: '', status: '', call_purpose_id: '', call_stage: '',
    };
    this.toggelDiv = this.toggelDiv.bind(this);
    this.toggelComplete = this.toggelComplete.bind(this);
    this.toggelSchedule = this.toggelSchedule.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.handelFormSubmit = this.handelFormSubmit.bind(this);
  }

  inputChange(e) {
    console.log("input type working");
    this.setState({
      [e.target.name]: e.target.value
    });

  }
  handelFormSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost/baba_sales/api/calls', {


      cust_id: this.props.cust_id,
      call_description: this.state.call_description,
      org_id: this.state.org_id,
      subject: this.state.subject,
      owner_id: this.state.owner_id,
      call_purpose: this.state.call_purpose,
      call_stage: this.state.call_stage,
      phone: this.state.phone,
      calltype: this.state.calltype,
      call_details: this.state.call_details,
      call_timer: this.state.call_timer,
      call_start_time: this.state.call_start_time,
      schedule_time: this.state.schedule_time,
      owner: this.state.owner,
      minute: this.state.minute,
      second: this.state.second,
      created_by: this.state.created_by,
      created_at: this.state.created_at,
      updated_at: this.state.updated_at,
      deleted_by: this.state.deleted_by,
      deleted_at: this.state.deleted_at,
      status: this.state.status,
      call_purpose_id: this.state.call_purpose_id,
      call_stage: this.state.call_stage,

      // name: this.state.name,
      // tel: this.state.tel
    }).then(response => {
      this.setState({
        cust_id: '',
        call_description: '',
        org_id: '',
        subject: '',
        owner_id: '',
        call_purpose: '',
        call_stage: '',
        phone: '',
        calltype: '',
        call_details: '', call_timer: '', call_start_time: '', schedule_time: '',
        owner: '', minute: '', second: '', created_by: '', created_at: '', updated_at: '', deleted_by: '',
        deleted_at: '', status: '', call_purpose_id: '', call_stage: '',
        // name: '',
        // tel: ''
      })
      this.props.history.push('/');
    }).catch(err => console.log(err));


  }

  toggelDiv(e) {
    const { show } = this.state;
    this.setState({
      show: !show,
    });
  }
  toggelComplete(e) {
    const { Complete } = this.state;
    this.setState({
      Complete: !Complete,
    });
  }
  toggelSchedule(e) {
    const { Schedule } = this.state;
    this.setState({
      Schedule: !Schedule,
    })
  }
  render() {
    return (
      <div>
        <div className="container">

          <div className="modal" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">


                <div className="modal-header" style={{backgroundColor:"#abc7e4", color: "black" }}>
                  <h4 className="modal-title">Create Call</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>

                </div>


                <div className="modal-body">
                  <form onSubmit={this.handelFormSubmit}>
                  <div className="form-group">
                     
                      <input type="hidden"
                        className="form-control" id="email" 
                        name="cust_id"
                        value={this.props.cust_id}
                        onChange={this.inputChange} />
                    </div>
                    <div className="form-group">
                      <label>Subject <span style={{ color: "red" }}>*</span></label>
                      <input type="text"
                        className="form-control" id="email" placeholder="Subject"
                        name="subject"
                        value={this.state.subject}
                        onChange={this.inputChange} />
                    </div>
                    <div className="form-group">


                      <label >Call Stage <span style={{ color: "red" }}>*</span></label>
                      <select name="call_stage"
                        value={this.state.call_stage}
                        onChange={this.inputChange} className="form-control" id="sel1">
                        <option value=" ">Select</option>
                        <option value="Closure">Closure</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="Finalization">Finalization</option>
                        <option value="Negotiation">Negotiation</option>
                        <option value="Demostration">Demostration</option>
                        <option value="Prospecting">Prospecting</option>
                      </select>
                    </div>        <div className="form-group">
                      <label>Prospect Value<span style={{ color: "red" }}>*</span></label>
                      <input type="text" className="form-control" id="email" placeholder="Prospect Value"
                        name="call_purpose"
                        value={this.state.call_purpose}
                        onChange={this.inputChange} />
                    </div>


                    <div className="form-group">
                      <label>Activity <span style={{ color: "red" }}>*</span></label>
                      <input type="text" className="form-control" id="email" placeholder="Activity"
                        name="call_details"
                        value={this.state.call_details}
                        onChange={this.inputChange} />
                    </div>

                    <input type="hidden"
                      value={this.state.cust_id}
                      onChange={this.inputChange} className="form-control"
                      id="email" placeholder=" ..." name="cust_id" />


                    <div className="form-group">
                      {/* <label>Phone Number</label>
                      <input type="text" className="form-control" id="email" placeholder=" ..."
                        name="phone"
                        value={this.state.phone}
                        onChange={this.inputChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="comment">Call Details <span style={{ color: "red" }}>*</span></label><br />

                      <input type="radio"
                        className="radio-inline"
                        value={this.state.call_details}
                        onChange={this.inputChange}
                        checked="Current Call"
                        name="call_details"
                        onClick={this.toggelDiv} />Current Call

              <input type="radio"
                        className="radio-inline"
                        value={this.state.call_details}
                        onChange={this.inputChange}
                        checked="Completed Call"
                        name="call_details"
                        onClick={this.toggelComplete} />Completed Call

        <input type="radio"
                        className="radio-inline"
                        value={this.state.call_details}
                        onChange={this.inputChange}
                        checked="Schedule Call"
                        name="call_details"
                        onClick={this.toggelSchedule} />Schedule Call
        <br />
                      {/* {this.state.show && <Current/>}
        {this.state.Complete &&<Complete/>}
        {this.state.Schedule &&<Schedule/>} */}

                    </div>

                    <div className="form-group">
                      <label htmlFor="comment">Description:</label>
                      <textarea className="form-control" rows="3"

                        value={this.state.call_description}
                        onChange={this.inputChange}
                        name="call_description" id="comment"></textarea>
                    </div>


                    <div className="modal-footer">
                      <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                  </form>

                </div>



              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}


class Current extends Component {
  render() {
    return (
      <div>
        <h1>current calsss calling</h1>
      </div>
    )
  }
}

class Complete extends Component {
  render() {
    return (
      <div>
        <h1>Complete calsss calling</h1>
      </div>
    )
  }
}
class Schedule extends Component {
  render() {
    return (
      <div>
        <h1>
          schedule calsss calling</h1>
      </div>
    )
  }
}

export default ModalExample;