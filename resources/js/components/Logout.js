import React, { Component } from 'react'
import {Link} from 'react-router-dom'

    import { Form } from 'react-bootstrap'

 class Logout extends Component {
     constructor(props){
         super(props)
         localStorage.removeItem("token")
     }
    render() {
        return (
            <div>
                <h1>You have been LoggedOut</h1>
                <Link to="baba_sales_react/">Login Again</Link>
            </div>
        )
    }
}

export default Logout
