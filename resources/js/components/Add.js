import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Add extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            tel: ''
        }
        this.handelNameInputChange = this.handelNameInputChange.bind(this);
        this.handeltelInputChange = this.handeltelInputChange.bind(this);
        this.handelFormSubmit = this.handelFormSubmit.bind(this);
    }

    handelNameInputChange(event) {
        this.setState({
            name: event.target.value
        })
    }
    handeltelInputChange(event) {
        this.setState({
            tel: event.target.value
        })
    }
    handelFormSubmit(event) {
        event.preventDefault();
        axios.post('/api/contact/create', {
            name: this.state.name,
            tel: this.state.tel
        }).then(response => {
            this.setState({
                name: '',
                tel: ''
            })
            this.props.history.push('/');
        }).catch(err => console.log(err));


    }



    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 justify-content-center">
                        <div className="card">
                            <div className="card-header">Add Component</div>

                            <div className="card-body">
                                <form onSubmit={this.handelFormSubmit}>
                                    <div className="form-group">
                                        <input type="text"
                                            required
                                            onChange={this.handelNameInputChange}
                                            value={this.state.name}
                                            className="form-control" name="name" placeholder="Enter Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                            required
                                            onChange={this.handeltelInputChange}
                                            value={this.state.tel} className="form-control" name="tel" placeholder="Enter Contact Details" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Add;

