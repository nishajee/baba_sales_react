import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import Login from './components/Login';
import Admin from './components/Admin';
import Logout from './components/Logout';
import Contentfragment from './components/Fragment/Contentfragment';
import Leads_table from './components/Fragment/Leads_table';
import ShowLead_table from './components/Fragment/ShowLead_table';
import Add_leads from './components/Fragment/Add_leads';

import View_leads from './components/Fragment/View_leads';
import ModalExample from './components/Fragment/ModalExample';
import Leadsedit from './components/Fragment/Leadsedit'
import Lead_report from './components/Fragment/Lead_report';
import Tellecalling from './components/Fragment/Tellecalling';
import Tellecalling_Response from './components/Fragment/Tellecalling_Response';
import Home_dashboard from './components/Fragment/Home_dashboard';
import { FaBeer, FaEye, FaChevronCircleRight, FaAdn, FaBars } from 'react-icons/fa';
import './components/Dashboard.css';

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menu: true,
        }

    }
    render() {
        return (
            <div>
                <nav className="mb-1 navbar navbar-expand-lg" style={{ backgroundImage: "linear-gradient(to left, #3490dc 0%, #70b5ff 100%)" }}>
                    <a className="navbar-brand" href="#">BABA SALES</a>

                    <h5 onClick={() => { this.setState({ menu: !this.state.menu }) }}><FaBars /></h5>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
                        aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
                        <ul className="navbar-nav mr-auto">
                            {/* <li className="nav-item active">
                                <a className="nav-link" href="#">Home
          <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li> */}
                        </ul>
                        <ul className="navbar-nav ml-auto nav-flex-icons">
                            <li className="nav-item avatar dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-555" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" style={{ width: "40px", height: "35px" }} className="rounded-circle z-depth-0"
                                        alt="avatar image" />
                                </a>

                                <div className="dropdown-menu dropdown-secondary"
                                    aria-labelledby="navbarDropdownMenuLink-555" style={{ marginRight: "-80px" }}>
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Router>


                    <Switch>

                        <div className="row">
                            {
                                this.state.menu ?


                                    <div className="col-md-2">

                                        <div id="mySidenav" className="sidenav" style={{ width: "15%", marginTop: "65px", background: "#e9f4ff" }}>
                                            <a href="" id="current"><Link to="/">Dasboard</Link></a>
                                            <a href="index"><Link to="/">Leads</Link></a>


                                            <p data-toggle="collapse" data-target="#demo" style={{ marginLeft: "1em", marginTop: "6px" }}>Tellicalling &nbsp; <FaAdn /></p>
                                            <div id="demo" class="collapse">
                                                <a href="#"><Link to="/tellicalling">Tellicalling</Link></a>
                                                <a href="#"><Link to="/tellicalling">Set a Demo Call</Link></a>
                                                <a href="#"><Link to="/tellicalling">Schedule</Link></a>
                                                <a href="#"><Link to="">Reports</Link></a>
                                            </div>

                                        </div>
                                    </div>
                                    : null

                            }
                            <div className="col-md-10" style={{ marginLeft: "15%", padding: " 0px 10px" }}>



                                <Route exact path="/" component={ShowLead_table} />
                                <Route path="/tellicalling" exact component={Tellecalling} />
                                <Route exact path="/leads/:id/response" component={Tellecalling_Response} />
                                <Route path="/add-lead" exact component={Add_leads} />
                                <Route path="/leads/:id/view" exact component={View_leads} />
                                <Route path="/leads/:id/edit" component={Leadsedit} />
                                
                                <Route path="/home" exact component={Home} />
                                <Route path="/add" exact component={Add} />
                                <Route path="/contact/:id/edit" exact component={Edit} />


                            </div>
                        </div>
                    </Switch>
                </Router>
            </div>
        );
    }

}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}

