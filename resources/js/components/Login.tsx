// import React, { Component, useImperativeHandle } from 'react'
// import AuthSevices from '../Services/AuthSevices';




//  class Login extends Component {
//     constructor(props) {
//     super (props)
//         this.state ={
//             username:'',
//             password:'',
//             Ischecked: false
//         }
// this.handleformSubmit= this.handleformSubmit.bind(this);
    
//     }
    
//     async handleformSubmit(event){
//         event.preventDefault();
//         // console.log(this.state.username,this.state.password);
//         const postData={
//             username:this.setState.username,
//             password:this.setState.password
//         }
//         const response = await AuthSevices.doUserLogin(postData);
//         console.log('response',response);
//     }

    
//     handleChecked(){
//         this.setState({Ischecked:!this.state.Ischecked});
//     }
//     render() {
//         const{username,password,Ischecked}= this.state;
//         return (
//             <div className="Login-page">
//                 <h1>Login..Admin</h1>
//               <form onSubmit={this.handleformSubmit}>
//               <label>Username</label>
//               <input type="text" className="form-control" 
//               name="username"
//                value={username} onChange={event => this.setState({
//                    username: event.target.value
//                })}/>
//               <br></br>
//               <label>Password</label>
              
//               <input type="password" className="form-control" 
//               name="password"
//                value={password} onChange={event => this.setState({
//                    password: event.target.value
//                })}/>

//                <input type ="checkbox" id ="remember"
//             checked ={Ischecked}
//                 onChange={()=> this.handleChecked()}/>
//                <label onClick={()=>this.handleChecked()}>Remember me</label>
//               <button className="btn btn-primary" type="submit">Login</button>
//               </form>
//             </div>
//         )
//     }
// }

// export default Login;