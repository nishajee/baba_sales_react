import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contacts: []

        }
    }
    componentDidMount() {
        console.log('callled');
        axios.get('/api/contacts')
            .then(response => {
                this.setState({
                    contacts: response.data
                })
            }).catch(err => console.log(err));
    }

    handleDeleted(contactID) {

    }
    render() {

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">All contacts</div>
                            <Link to="/add-lead" className="btn btn-primary col-md-3">Add contacts</Link>
                            <div className="card-body">

                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Phone</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.contacts !== null
                                                ? this.state.contacts.map(contact => (
                                                    <tr key={contact.id}>
                                                        <td>{contact.name}</td>
                                                        <td>{contact.tel}</td>
                                                        <td>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <Link to={`/contact/${contact.id}/edit`} className="btn btn-warning">Update</Link>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <button
                                                                        onClick={this.handleDeleted.bind(this, contact.id)}
                                                                        className="btn btn-sm btn-warning float-right">Delete
                                                                  </button>
                                                                    {/* <Link to={`/contact/${contact.id}/delete`} className="btn btn-danger">Delete</Link> */}
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                                :
                                                null
                                        }


                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

