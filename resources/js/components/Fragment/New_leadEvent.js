import React, { Component } from 'react'

class Note_leadtask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            event_description: '', subject: '', start_date_time: '', 
            end_date_time: '', location: '', taskstatus: ''
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
        axios.post('http://localhost/baba_sales/api/events', {
            event_description: this.state.event_description,
            subject: this.state.subject,
            start_date_time: this.state.start_date_time,
            end_date_time: this.state.end_date_time,
            location: this.state.location,
            taskstatus: this.state.taskstatus,

        }).then(response => {
            this.setState({
                event_description: '', subject: '', start_date_time: '', end_date_time: '', location: '', taskstatus: ''
            })
            this.props.history.push('/');
        }).catch(err => console.log(err));


    }

    render() {
        return (
            <div>
                <div className="container">

                    <div className="modal" id="myEvent">
                        <div className="modal-dialog">
                            <div className="modal-content">


                                <div className="modal-header" style={{backgroundColor:"#abc7e4", color: "black" }}>
                                    <h4 className="modal-title">Create Event</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>


                                <div className="modal-body">
                                    <form onSubmit={this.handelFormSubmit}>
                                        <div className="form-group">
                                            <label>Subject<span style={{ color: "red" }}>*</span></label>
                                            <input type="text" name="subject"
                                                value={this.state.subject}
                                                onChange={this.inputChange} className="form-control" id="email" placeholder="subject" />
                                        </div>

                                        <div className="form-group">
                                            <label>Status <span style={{ color: "red" }}>*</span></label><br />
                                            <label class="radio-inline">
                                                <input type="radio" 
                                                name="taskstatus"
                                                    value="Planned"
                                                    value={this.state.taskstatus}
                                                    onChange={this.inputChange} style={{ marginRight: "10px" }} required/>Planned
                        </label>
                                            <label class="radio-inline">
                                                <input type="radio"
                                                name="taskstatus"
                                                    value="Held"
                                                    value={this.state.taskstatus}
                                                    onChange={this.inputChange} style={{ marginRight: "10px" }} required />Held
                        </label>
                                            <label class="radio-inline">
                                                <input type="radio"
                                                 name="taskstatus"
                                                    value="Not Held"
                                                    value={this.state.taskstatus}
                                                    onChange={this.inputChange} style={{ marginRight: "10px" }}  required />Not Held
                        </label>
                                            <label class="radio-inline">
                                                <input type="radio"
                                                name="taskstatus"
                                                    value="Cancelled"
                                                    value={this.state.taskstatus}
                                                    onChange={this.inputChange} style={{ marginRight: "10px" }}  required />Cancelled
                        </label>
                                        </div>

                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Start Date Time <span style={{ color: "red" }}>*</span></label>
                                                    <input type="date" name="start_date_time"
                                                        value={this.state.start_date_time}
                                                        onChange={this.inputChange} className="form-control" id="email" placeholder=" ..." />
                                                </div>
                                                <div className="col-md-6">
                                                    <label>Start End Time <span style={{ color: "red" }}>*</span></label>
                                                    <input type="date" name="end_date_time"
                                                        value={this.state.end_date_time}
                                                        onChange={this.inputChange} className="form-control" id="email" placeholder=" ..." />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Location<span style={{ color: "red" }}>*</span></label>
                                            <input type="text" name="location"
                                                value={this.state.location}
                                                onChange={this.inputChange} className="form-control" id="email" placeholder="Location" />
                                        </div>

                                        <div className="form-group">
                                            <label for="comment">Description</label>
                                            <textarea value={this.state.event_description}
                                                onChange={this.inputChange} className="form-control" rows="3" name="event_description" id="comment"></textarea>
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