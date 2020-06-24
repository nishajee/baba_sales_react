import React, { Component } from 'react';
import './Dashboard.css';

 class Header extends Component {
    render() {
        return (
            <div>
                  <nav className="mb-1 navbar navbar-expand-lg navbar-dark" style={{ backgroundImage: "linear-gradient(to bottom, #000099 0%, #009999 100%)", marginLeft: "-20px", marginRight: "-40px"}}>
                    <a className="navbar-brand" href="#">BABA SALES</a>
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
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-555" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Dropdown
        </a>
                                <div className="dropdown-menu dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-555">
                                    * <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto nav-flex-icons">
                            <li className="nav-item">
                                <a className="nav-link waves-effect waves-light">1
          <i className="fas fa-envelope"></i>
                                </a>
                            </li>

                            <li className="nav-item avatar dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-55" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" style={{ width: "40px", height: "35px" }} className="rounded-circle z-depth-0"
                                        alt="avatar image" />
                                </a>

                                <div className="dropdown-menu dropdown-secondary"
                                    aria-labelledby="navbarDropdownMenuLink-55" style={{ marginRight: "-80px" }}>
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Header;