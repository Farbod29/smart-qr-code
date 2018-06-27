import React, {Component} from 'react';
import Button from "@material-ui/core/es/Button/Button";
import TextField from "@material-ui/core/es/TextField/TextField";
import Header from "../Header/Header";
import {LinkContainer} from "react-router-bootstrap";


class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {

        return (
            <div className="App">
                <Header/>
                <div className="login-clean">
                    <form method="post">
                        <h2 className="sr-only">Login Form</h2>
                        <div className="illustration"><i className="icon ion-log-in text-primary"/>
                        </div>
                        <div className="form-group">
                            <TextField
                                id="email"
                                label="enter your email"
                                name="email"
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                margin="normal"
                                className="form-control"   />
                        </div>
                        <div className="form-group">
                            <TextField
                                id="password"
                                label="enter your password"
                                name="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                margin="normal"
                                className="form-control"   />
                        </div>
                        <div className="form-group">
                            <Button variant="contained" color="primary" type="submit"  disabled={!this.validateForm()}>
                               Login
                            </Button>
                        </div>
                        <LinkContainer to="/forgetPass" style={{ color: '#B22222' }}>
                            <a>
                                Forget my password
                            </a>
                        </LinkContainer>
                    <br/>
                        <LinkContainer to="/Register" style={{ color: '#3267b2' }}>
                            <a>
                                Create Account
                            </a>
                        </LinkContainer>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginComponent;