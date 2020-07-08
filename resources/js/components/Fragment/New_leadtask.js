import React, { Component } from 'react'

class Note_leadtask extends Component {
    constructor(props){
        super(props)
        this.state={
            task_description:'',subject:'', due_date:'',taskstatus:''
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
        axios.post('/api/tasks', {
            task_description:this.state.task_description,
            subject:this.state.subject,
             due_date:this.state.due_date,
            taskstatus:this.state.taskstatus

            
       
         
          // name: this.state.name,
          // tel: this.state.tel
        }).then(response => {
          this.setState({
            task_description:'',subject:'', due_date:'',taskstatus:''
          
          })
          this.props.history.push('/');
        }).catch(err => console.log(err));
    
    
      }

  render() {
    return (
      <div>
        <div className="container">

          <div className="modal" id="myTask">
            <div className="modal-dialog">
              <div className="modal-content">


                <div className="modal-header" style={{backgroundColor:"#abc7e4", color: "black" }}>
                  <h4 className="modal-title">Create Task</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>


                <div className="modal-body">
                  <form onSubmit={this.handelFormSubmit}>
                    <div className="form-group">
                      <label>Subject<span style={{color:"red"}}>*</span></label>
                      <input type="text"
                      name="subject"
                        value={this.state.subject}
                        onChange={this.inputChange}
                       className="form-control" id="email" placeholder="Subject"/>
                    </div>
                    <div className="form-group">
                      <label>Due Date <span style={{color:"red"}}>*</span></label>
                      <input type="date" 
                       name="due_date"
                        value={this.state.due_date}
                        onChange={this.inputChange}className="form-control" placeholder="Enter date"/>
                    </div>

                    <div className="form-group">
                      <label>Status <span style={{color:"red"}}>*</span></label><br/>
                      <label class="radio-inline">
                        <input type="radio" style={{marginRight:"10px"}}
                        value={this.state.taskstatus}
                        onChange={this.inputChange}
                         name="taskstatus" checked/>Planned
                        </label>
                        <label class="radio-inline">
                        <input type="radio"  style={{marginRight:"10px"}}
                         value={this.state.taskstatus}
                        onChange={this.inputChange} name="taskstatus"/>Held
                        </label>
                        <label class="radio-inline">
                        <input type="radio" 
                         value={this.state.taskstatus}
                        onChange={this.inputChange} style={{marginRight:"10px"}} name="taskstatus"/>Not Held
                        </label>
                        <label class="radio-inline">
                        <input type="radio" 
                         value={this.state.taskstatus}
                        onChange={this.inputChange} style={{marginRight:"10px"}} name="taskstatus"/>Cancelled
                        </label>
                    </div>

                   

                    <div className="form-group">
                      <label for="comment">Description</label>
                      <textarea className="form-control"
                       value={this.state.task_description}
                        onChange={this.inputChange} rows="3" name="task_description" id="comment"></textarea>
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