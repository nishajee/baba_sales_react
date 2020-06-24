import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Navbar,Nav,NavDropdown,FormControl,Form} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'
import {postData} from '../Services/PostData';

export class Login extends Component {
    constructor(props){
        super(props)
        // const token = localStorage.getItem("token")
        // let loggedin = true
        // if(token == null){
        //     loggedin = false
        // }
       
        this.state = {
            usernmae:'',
            password: '',
           redirect:false
            // loggedin
        }
        this.onChange = this.onChange.bind(this);
        this.login = this.login.bind(this);
        //  this.onChangepass = this.onChangepass.bind(this);
      // this.submitForm = this.submitForm.bind(this)
    }
    login(){
      if(this.state.username && this.state.password){
        postData('login',this.state).then((result)=>{
          let respresponseJSON = result;
          // console.log(respresponseJSON);
          if(respresponseJSON.userData){
            sessionStorage.setItem('userData',respresponseJSON);
            //redirect the page
            this.setState({redirect:true});
  
          }
          else{
            console.log("Login error")
          }
        });

      }
      
      
    }
    
    onChange(e){
      console.log("doing good");
      this.setState({
        [e.target.name]:e.target.value
      
      });
 
    }

    // onChangepass(e){
    //   console.log("its working pass");
    //   this.setState({
    //     password:e.target.value,
       
    //   });
     
    // }
    // onChange(e){
    //     this.setState({
    //     [e.target.name]:e.target.value
          
    //     })
    // }

    // onChange(e){
    //     this.setState({
         
    //       password:e.target.value
    //     })
    // }
    // submitForm(e){
    //     event.preventDefault()
    //     const {username,password} = this.state
    //     if(username === "A" && password ==="B"){
    //       localStorage.setItem("token","abcdefghijk")
    //       this.setState({
          
    //         loggedin:true
    //       })
    //     }
    //         }
    

    render() {
       if(this.state.redirect){
        return <Redirect to="/admin"/>
       }
       if(sessionStorage.getItem("userData")){
        return <Redirect to="/admin"/>
       }
       
        return (
            <div>
            
              <h1>Login..</h1>
          
              <label>Username</label>
              <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.onChange}/>
              <br></br>
              <label>Password</label>
              <input type="password" className="form-control" name="password" value={this.state.password}onChange={this.onChange}/>
              
              <button className="btn btn-primary" type="submit" onClick={this.login}>Login</button>
      
  
            </div>
        )
    }
}

export default Login
