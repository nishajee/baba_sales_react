import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'



export class Admin extends Component {
    constructor(props){
        super(props)
    this.state ={
        redirect:false
    }
    this.logout = this.logout.bind(this);
    }
    componentWillMount(){
        if(sessionStorage.getItem("userData")){
            console.log("call user feed");
        }
        else{
            this.setState({
                redirect:true
            });
        }
    }
    logout(){
        sessionStorage.setItem("userData",'');
        sessionStorage.clear();
        this.setState({
            redirect:true
        });
    }
    // constructor(props){
    //     super(props)
    //     const token = localStorage.getItem("token")
    //     let loggedin = true
    //     if(token == null){
    //         loggedin = false
    //     }
    //     this.state={
    //         loggedin
    //     }

    // }
    render() {
        // if(this.state.loggedin === false){
        //     return <Redirect to="/"/>
        //   }
        if(this.state.redirect){
            return <Redirect to="/"/>
          }
        return (
            <div>
                <h1>admin pade only authorised people can see this</h1>
                <button type="button" className="btn btn-danger" onClick={this.logout}>Logout</button>
                {/* <Link to="/Logout">Logout</Link> */}
            </div>
        )
    }
}

export default Admin
