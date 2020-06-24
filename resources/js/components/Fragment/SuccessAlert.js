import React, { Component } from 'react'

export default class SuccessAlert extends Component {
    render() {
        return (
            <div class="alert alert-success" role="alert">
           {this.props.message}
        </div>
        )
    }
}
