import React, { Component } from 'react'

class Add_attachment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '', attachment: '', created_at: '',
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
        axios.post('http://localhost/baba_sales/api/attachments', {
            title: this.state.title, attachment: this.state.attachment, created_at: this.state.created_at,
        }).then(response => {
            this.setState({
                title: '', attachment: '', created_at: '',
            })
            this.props.history.push('/');
        }).catch(err => console.log(err));


    }

    render() {
        return (
            <div>
                <div className="container">

                    <div className="modal" id="attachment">
                        <div className="modal-dialog">
                            <div className="modal-content">


                                <div className="modal-header" style={{backgroundColor:"#abc7e4", color: "black" }}>
                                    <h4 className="modal-title">Attachments / Files</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>


                                <div className="modal-body">
                                    <form onSubmit={this.handelFormSubmit}>
                                        <div className="form-group">
                                            <label>Title<span style={{ color: "red" }}>*</span></label>
                                            <input type="text"
                                                value={this.state.title}
                                                onChange={this.inputChange} name="title" className="form-control" id="email" placeholder="Title" />
                                        </div>
                                        <div className="form-group">
                                            <label>Files<span style={{ color: "red" }}>*</span></label><br />
                                            <input type="file" value={this.state.attachment}
                                                onChange={this.inputChange} name="attachment" className="form-control" onChange={this.inputChange} encType="multipart" />

                                        </div>
                                        <div className="form-group">
                                            <label>Create Date<span style={{ color: "red" }}>*</span></label>
                                            <input type="date" value={this.state.created_at}
                                                onChange={this.inputChange} name="created_at" className="form-control" id="email" />
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

export default Add_attachment;