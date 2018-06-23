import React, {Component} from 'react';
import {LinkContainer} from "react-router-bootstrap";

// styles
// import "../../../node_modules/jquery/dist/jquery.min.js";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";

class Header extends Component {
    render() {
        const shadow = {
            boxShadow: '1px 1px 5px rgba(0, 0, 0, .25)'
        };
        return (
            <div className="App">

                <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top" style={shadow}>
                    <div className="container mt-0">
                        <a className="navbar-brand text-dark abs font-weight-bold" href="#">
                            Smart QR-Code
                        </a>
                        <button className="navbar-toggler navbar-toggler-right"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarToggleExternalContent">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <LinkContainer to="/">
                                        <a className="nav-link text-primary font-weight-bold">
                                            Dashboard
                                        </a>
                                    </LinkContainer>
                                </li>
                                <li className="nav-item ">
                                    <LinkContainer to="/ForgotPassword">
                                        <a className="nav-link text-dark font-weight-bold">
                                            Scan
                                        </a>
                                    </LinkContainer>
                                </li>
                                <li className="nav-item ">
                                    <LinkContainer to="/Register">
                                        <a className="nav-link text-dark font-weight-bold">
                                           Settings
                                        </a>
                                    </LinkContainer>
                                </li>
                                <li className="nav-item ">
                                    <LinkContainer to="/Messages">
                                        <a className="nav-link text-dark font-weight-bold">
                                            Logout
                                        </a>
                                    </LinkContainer>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
