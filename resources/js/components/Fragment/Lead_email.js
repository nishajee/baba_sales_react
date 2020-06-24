import React, { Component } from 'react'

class Lead_email extends Component {
    constructor(props) {
        super(props)
        this.state = {
            to:'',
            cc:'',
            bcc:'',
            subject:'',
             message:'',
            email_description:'',
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
        axios.post('http://localhost/baba_sales/api/emails', {
            to:this.state.to,
            cc:this.state.cc,
            bcc:this.state.bcc,
            subject:this.state.subject,
             message:this.state.message,
            email_description:this.state.email_description,
            // tel: this.state.tel
        }).then(response => {
            this.setState({
                to:'', cc:'',bcc:'',subject:'',message:'',email_description:'',

            })
            this.props.history.push('/');
        }).catch(err => console.log(err));


    }

    render() {
        return (
            <div>
                <div className="container">

                    <div className="modal" id="myEmail">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="modal-header" style={{ backgroundColor: "teal", color: "white" }}>
                                    <h4 className="modal-title">Send Email</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>


                                <div className="alert alert-success modal-body">
                                    <form onSubmit={this.handelFormSubmit}>
                                        <div className="form-group">
                                            <label>To<span style={{ color: "red" }}>*</span></label>
                                            <input type="email"
                                             value={this.state.to}
                                              onChange={this.inputChange} name="to"
                                             className="form-control" id="email" placeholder="To"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Cc</label>
                                            <input type="email" 
                                            value={this.state.cc}
                                              onChange={this.inputChange} name="cc"className="form-control" id="email" placeholder="cc"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Bcc</label>
                                            <input type="email"
                                            value={this.state.bcc}
                                              onChange={this.inputChange} name="bcc" className="form-control" id="email" placeholder="Bcc"/>
                                        </div>
                                        <div className="form-group">
                                        <label>Subject <span style={{ color: "red" }}>*</span></label>
                                            <input type="text" 
                                            value={this.state.subject}
                                              onChange={this.inputChange} name="subject"className="form-control" id="email" placeholder="Subject"/>
                                        </div>
                                        <div className="form-group">
                                        <label>Message <span style={{ color: "red" }}>*</span></label>
                                        <textarea   value={this.state.message}
                                              onChange={this.inputChange} name="message"
                                         placeholder="Message..." className="form-control" rows="3" id="comment"></textarea>
                                        </div>

                                        <div className="form-group">
                                            <label for="comment">Description</label>
                                            <textarea
                                              value={this.state.email_description}
                                              onChange={this.inputChange} name="email_description" className="form-control" rows="3" id="comment"></textarea>
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

export default Lead_email;