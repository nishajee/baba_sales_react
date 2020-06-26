import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ReactSearchBox from 'react-search-box';
import SearchField from 'react-search-field';
import { Link } from 'react-router-dom';
import Call_history from './Call_history';
import { FaBeer, FaEye, FaChevronCircleRight,FaBackward, FaPhoneSquare, FaHistory, FaBook } from 'react-icons/fa';


class Tellecalling extends Component {
    constructor(props) {
        super(props)
        this.state = {
            leads: [],
            calls:[]

        }
       
    }


    componentDidMount() {
        console.log('callled leads ');
        axios.get('http://localhost/baba_sales_react/api/leads')
            .then(response => {
                this.setState({
                    leads: response.data,
                    id: response.data,
                })
            }).catch(err => console.log(err));

               }
 
    render() {
        return (
            <div>


                <Card style={{ backgroundColor: "cream" }}>
                    <Card.Header>
                       <div className="row">
                       <div className="col-md-10">
                        <h5>Leads Call Details</h5>
                        </div>
                        <div className="col-md-2">
                        <Link to="/" style={{ color: "black",marginTop:"-5px",fontSize: "1.2em" }}><FaBackward/> Back</Link>
                        </div>
                       </div>
                    </Card.Header>
                    <Card.Body>
                    

                        <div className="row">
                            {this.state.leads !== null
                                ? this.state.leads.map(lead => (

                                    <div className="card text-black bg-default mb-4" style={{ width: "20rem", marginRight: "5px", marginTop: "2px" }}>
                                        <div className="card-header" style={{ backgroundColor:"#A1DAF3",color:"black",lineHeight:"1.2em"}}>
                                            <div class="row">
                                                <div class="col-md-8">
                                                    <h5>Lead Infromation</h5>
                                                </div>
                                                <div class="col-md-4">
                                                    <Link to={`/leads/${lead.id}/response`} style={{ color: "black",marginTop:"-5px",fontSize: "1.6em" }}><FaPhoneSquare /></Link>
                                                    <Link to={`/leads/${lead.id}/demo-call`} style={{ color: "black",marginTop:"-5px",fontSize: "1.6em" }}>Demo call</Link>
                                                </div>
                                                
                                               
                                                   {/* <button data-target="#callHistory" style={{ color: "teal", fontSize: "1.6em" }}><FaBook /></button> */}
                                                 

                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <table>
                                                <tr>
                                                    <th>Name: </th>
                                                    <td>{lead.first_name}</td>
                                                </tr>
                                                <tr>
                                                    <th>Contact</th>
                                                    <td>{lead.mobile}</td>
                                                </tr>
                                                <tr>
                                                    <th>Email:</th>
                                                    <td>{lead.email}</td>
                                                </tr>
                                            </table>

                                        </div>
                                    </div>



                                ))
                                :
                                null
                            }

                        </div>



                    </Card.Body>
                </Card>

            </div>
        )
    }
}
export default Tellecalling;