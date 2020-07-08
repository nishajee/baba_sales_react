import React, { Component } from 'react'

class Note_leadtask extends Component {
    constructor(props){
        super(props)
        this.state={
          reminder_name:'',
          reminder_date:'', reminder_time:'', reminder_description:'',reminderstatus:'',
        }
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
        axios.post('/api/leadReminder', {
          reminder_name:this.state.reminder_name,
          reminder_date:this.state.reminder_date, 
          reminder_time:this.state.reminder_time, 
          reminder_description:this.state.reminder_description,
          reminderstatus:this.state.reminderstatus,
             }).then(response => {
          this.setState({
            reminder_name:'',
          reminder_date:'', reminder_time:'', reminder_description:'',reminderstatus:'',
          
          })
          this.props.history.push('/');
        }).catch(err => console.log(err));
    
    
      }

  render() {
    return (
      <div>
        <div className="container">

          <div className="modal" id="myReminder">
            <div className="modal-dialog">
              <div className="modal-content">


                <div className="modal-header" style={{backgroundColor:"#abc7e4", color: "black" }}>
                  <h4 className="modal-title">Set Reminder</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>


                <div className="modal-body">
                  <form onSubmit={this.handelFormSubmit}>
                    <div className="form-group">
                      <label>Reminder Name<span style={{color:"red"}}>*</span></label>
                      <input type="text"  value={this.state.reminder_name}
                        onChange={this.inputChange}
                        name="reminder_name"  className="form-control" id="email" placeholder="Reminder Name"/>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <div className="form-group">
                      <label>Reminder Date<span style={{color:"red"}}>*</span></label>
                      <input type="date" value={this.state.reminder_date}
                        onChange={this.inputChange}
                        name="reminder_date"  className="form-control" id="email" placeholder="Reminder Name"/>
                    </div>
                        </div>
                        <div className="col-md-6">
                  <div className="form-group">
                      <label>Time<span style={{color:"red"}}>*</span></label>
                      <input type="time" value={this.state.reminder_time}
                        onChange={this.inputChange}
                        name="reminder_time" className="form-control" id="email"/>
                    </div>
                        </div>
                    </div>
                   
                    <div className="form-group">
                      <label>Reminder<span style={{color:"red"}}></span></label><br/>
                      <label class="radio-inline">
                        <input type="radio" value={this.state.reminderstatus}
                        onChange={this.inputChange} value="Email" style={{marginRight:"10px"}} name="reminderstatus"/>Email
                        </label>
                           <label class="radio-inline">
                        <input type="radio" value={this.state.reminderstatus}
                        onChange={this.inputChange} value="Sms" style={{marginRight:"10px"}} name="reminderstatus"/>Sms
                        </label>
                        <label class="radio-inline">
                        <input type="radio" value={this.state.reminderstatus}
                        onChange={this.inputChange} value="PopUp" style={{marginRight:"10px"}} name="reminderstatus"/>PopUp
                        </label>    </div>
                    <div className="form-group">
                      <label for="comment">Description</label>
                      <textarea value={this.state.reminder_description}
                        onChange={this.inputChange}
                       className="form-control" rows="3" name="reminder_description" id="comment"></textarea>
                    </div>
                    <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
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

export default Note_leadtask;