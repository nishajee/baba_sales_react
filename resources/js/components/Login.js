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
        return <Redirect to="admin"/>
       }
       if(sessionStorage.getItem("userData")){
        return <Redirect to="admin"/>
       }
       
        return (
            <div id="particles-js">
            <div id="particle"></div>
            <div id="overlay">
            <div className="container">
                <div className="center-block">
                    <div className="col-lg-4">
                        <div className="mlt-content">
                            <div className="imgcontainer">
                               <a href="http://baba.software/index.php"><img src="public/login2/img/baba logo.png" alt="logo"/></a>
                            </div>
                     
                            <h5 class="allign:center text-primary"><u><strong>Login</strong></u></h5>
                
                            <div id="myTabContent" className="tab-content">
                              
                                <div className="col-md-12">
                               
                               
                                        <center>
                                            
                                       
                                        <div className="col-lg-12 col-lg-offset-1 col-lg-offset-right-1 col-md-12 col-md-offset-1 col-md-offset-right-1 col-sm-12 col-xs-12 pull-right ">
                                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                                <input className="mdl-textfield__input"  type="text" placeholder="User Name" name="username"   required  id="username" name="username" value={this.state.username} onChange={this.onChange}/>
                                                
                                            </div>
                                        </div>
        
                                        <div className="col-lg-12 col-lg-offset-1 col-lg-offset-right-1 col-md-12 col-md-offset-1 col-md-offset-right-1 col-sm-12 col-xs-12 pull-right " >
                                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                                <input className="mdl-textfield__input" id="password" type="password" placeholder="Password" name="password"  required id="password" value={this.state.password}onChange={this.onChange}/>
                                                
                                         
                                            </div>
                                        </div>
                                        
                                <div className="col-lg-12 col-lg-offset-1 col-lg-offset-right-1 col-md-12 col-md-offset-1 col-md-offset-right-1 col-sm-12 col-xs-12 pull-right ">
                                <button className="btn btn-primary" id="login"  onClick={this.login} style={{width:"30%",borderRadius:"18px"}}> Login <i className="icon-right "></i></button>
                            </div><br/>
        
        
                                     
        
                                       
                                         <div className="col-md-12 mt-2" style={{padding:"1em"}}>
                                            <a href="http://baba.software/privacy.php" style={{color: "rgb(12, 11, 11)"}}>Privacy Policy</a> | <a href="http://baba.software/terms-condition.php" style={{color: "rgb(12, 11, 11)"}}>Terms of Use</a><br/>
                                         </div>
                                        </center>
                                         
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8" style={{marginLeft:"-29px"}}>
                        <div className="mlt-carousel">
                            <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
                                <div className="carousel-inner" role="listbox">
                                    <div className="item active">
                                        <img className="img-responsive center-block" src="public/login2/img/payroll.png" alt="step1"/>
                                       
                                    </div>
                                    <div className="item">
                                        <img className="img-responsive center-block" src="public/login2/img/crm.png" alt="step2"/>
                                        
                                    </div>
                                    <div className="item">
                                        <img className="img-responsive center-block" src="public/login2/img/recruitment.png" alt="step3"/>
                                        
                                    </div>
                                    <div className="item">
                                        <img className="img-responsive center-block" src="public/login2/img/lms.png" alt="step4"/>
                                       
                                    </div>
                                    <div className="item">
                                        <img className="img-responsive center-block" src="public/login2/img/ar.png" alt="step5"/>
                                        
                                    </div>
                                    <div className="item">
                                        <img className="img-responsive center-block" src="public/login2/img/sales.png" alt="step6"/>
                                        
                                    </div>
                                </div>
                               
                                <ol className="carousel-indicators carousel-btns">
                                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                    <li data-target="#myCarousel" data-slide-to="3"></li>
                                    <li data-target="#myCarousel" data-slide-to="4"></li>
                                    <li data-target="#myCarousel" data-slide-to="5"></li>
                                    
                                   
                                </ol>
                            </div>
               
                        </div>
                    </div>
              
        
                    <div className="col-md-12 text-center" style={{color:"rgb(250, 248, 248)",paddingTop:"40px"}}>
                        Project Baba © 2019 - 2020 BABA Software. All rights reserved.
                    </div>
                </div>
                
                   
                
            </div>
        </div>
        </div>




            
        )
    }
}

export default Login
