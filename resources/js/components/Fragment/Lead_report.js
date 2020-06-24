import React, { Component } from 'react'

class Lead_report extends Component {
    render() {
        return (
            <div>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Library</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                </nav>
                <div class="container">


                    <ul class="nav nav-tabs">
                        <li class="active"><a class="btn btn-outline-info active" data-toggle="tab" href="#home">calls</a></li>
                        <li><a class="btn btn-outline-info" data-toggle="tab" href="#menu1">Tasks</a></li>
                        <li><a class="btn btn-outline-info" data-toggle="tab" href="#menu2">Events</a></li>
                        <li><a class="btn btn-outline-info" data-toggle="tab" href="#menu3">Emails</a></li>
                        <li><a class="btn btn-outline-info" data-toggle="tab" href="#menu4">Reminders</a></li>
                    </ul>

                    <div class="tab-content">
                        <div id="home" class="tab-pane fade in active">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Subject</th>
                                        <th>	Call Stage</th>
                                        <th>	Activity</th>
                                        <th>	Call Details</th>
                                        <th>Call Duration</th>
                                        <th>	Lead Name</th>
                                        <th>	Description</th>
                                        <th>	Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div id="menu1" class="tab-pane fade">
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th>Subject</th>
                                        <th>Due Date</th>
                                        <th>Status</th>
                                        <th>Lead Name</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div id="menu2" class="tab-pane fade">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Subject</th>
                                        <th>Description</th>
                                        <th>Start Date-Time</th>
                                        <th>End Date-Time</th>
                                        <th>Location</th>
                                        <th>Status</th>
                                        <th>Lead Name</th>
                                        <th>Description</th>
                                        <th>Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div id="menu4" class="tab-pane fade">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>
Name</th>
                                        <th>Email</th>
                                        <th>Subject</th>
                                        <th>	Message</th>
                                        <th>Rec-ID</th>
                                        <th>Description</th>
                                        

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div id="menu4" class="tab-pane fade">
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th>Reminder Name</th>
                                        <th>Reminder Status</th>
                                        <th>Reminder Date</th>
                                        <th>Time</th>
                                        <th>Description</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                       
                                        
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Lead_report