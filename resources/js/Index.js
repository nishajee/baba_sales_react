import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route, Switch, Link } from 'react-router-dom'
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
import { FaBeer, FaEye, FaChevronCircleRight,FaAdn,FaBars } from 'react-icons/fa';
import './components/Dashboard.css';

class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            menu:true,
        }
       
    }
    render() {
        return (
            <div>
            <BrowserRouter>
                <Switch>
            
                                <Route exact path="/baba_sales_react" component={Login} />
                                <Route path="/baba_sales_react/admin" component={Admin} />
                                <Route path="/baba_sales_react/logout" component={Logout} />
                               

                        
                    </Switch>
                    </BrowserRouter>
                
            </div>
        );
    }

}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}




