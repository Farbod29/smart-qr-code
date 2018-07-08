import React, {Component} from 'react';
import Button from "@material-ui/core/es/Button/Button";
import TextField from "@material-ui/core/es/TextField/TextField";
import Header from "../Header/Header";
import {LinkContainer} from "react-router-bootstrap";
import {loginData} from "../../utils/Connection";
import StorageKeys from "../../utils/StorageKeys";


class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            isRequesting: false
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

    login(event){
        this.setState({
            isRequesting: true,
        });
        loginData(this.state.email, this.state.password)
            .then((result) => {
                console.log("status1: " + result);
                if (result.status === 200) {
                    console.log("status2: ");
                    this.setState({
                        isRequesting: false,
                    });
                    let _email = result.data.message.email;
                    let _userId = result.data.message._id;
                    let _photoURL = result.data.message.photo;
                    localStorage.setItem(StorageKeys.EMAIL, _email);
                    localStorage.setItem(StorageKeys.USER_ID, _userId);
                    localStorage.setItem(StorageKeys.PHOTO_URL, _photoURL);

                    this.props.history.push('/home');
                }
                else {
                    this.setState({
                        isRequesting: false
                    });
                    console.log("status3: " + result);
                }
            })
            .catch(error => {
                console.log("status4: " + error);
                this.setState({
                    isRequesting: false
                });
            });
        event.preventDefault();
    }

    componentDidMount() {
        if (localStorage.getItem(StorageKeys.USER_ID).length > 0 ){
            this.props.history.push('/home');
        }
    }

    render() {

        return (
            <div className="App">
                <Header/>
                <div className="login-clean">
                    <form onSubmit={this.login.bind(this)}>
                        <h2 className="sr-only">Login Form</h2>
                        <div className="illustration"><i className="icon ion-log-in text-primary"/>
                        </div>
                        <div className="form-group">
                            <TextField
                                id="email"
                                label="Email"
                                placeholder="type your email"
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
                                label="Password"
                                placeholder="type your password"
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
                        <LinkContainer to="/ForgotPassword" style={{ color: '#B22222' }}>
                            <a>
                                Forgot my password
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