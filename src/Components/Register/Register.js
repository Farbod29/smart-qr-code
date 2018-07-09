import React, {Component} from 'react';
import Button from "@material-ui/core/es/Button/Button";
import TextField from "@material-ui/core/es/TextField/TextField";
import Header from "../Header/Header";
import StorageKeys from "../../utils/StorageKeys";
import {loginData, registerData} from "../../utils/Connection";

class RegisterComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            validating: false,
            validatingConfirmPass: false,
            isRequesting: true,
        };
    }

    validateForm() {
        return this.state.validatingConfirmPass == true && this.state.email.length > 0
            && this.state.password.length > 0 && this.state.confirmPassword.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    isConfirmedPassword() {
            this.state.validating = true;
    }

    renderPasswordConfirmError= event => {

        if (this.state.validating && this.state.password !== this.state.confirmPassword) {
            this.state.validatingConfirmPass = false;
            return (
                <div>
                    <label id="validConfirmPass" className="error" ref="errorMsg" style={{color: "#ff0834", fontSize:"small", float:"left"}} >Not match! Please rewrite the same password.</label>
                </div>
            );
        }
        else
            this.state.validatingConfirmPass = true ;
    }

    componentDidMount() {
        if (localStorage.getItem(StorageKeys.USER_ID) != null && localStorage.getItem(StorageKeys.USER_ID).length > 0 ){
            this.props.history.push('/');
        }
    }

    register(event){
        this.setState({
            isRequesting: true,
        });
        registerData(this.state.email, this.state.password)
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
                        isRequesting: false,
                        errorMessage: result.response.data.message
                    });
                    console.log("status3: " + result);
                }
            })
            .catch(error => {
                console.log("status4: " + error);
                this.setState({
                    isRequesting: false,
                    errorMessage: error.response.data.message
                });
            });
        event.preventDefault();
    }


    render() {

        return <div className="App">

            <Header/>
            <div className="registration-clean">
                <form onSubmit={this.register.bind(this)}>
                    <h2 className="text-center" style={{color: "#0000FF"}}>Create Account</h2>
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
                            className="form-control"/>
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
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <TextField
                            id="confirmPassword"
                            label="Password Confirmation"
                            placeholder= "repeat your password"
                            name="confirmPassword"
                            type="password"
                            value={this.state.confirmPassword}
                            onChange={this.handleChange}
                            onFocus={this.isConfirmedPassword.bind(this)}
                            margin="normal"
                            className="form-control"/>
                    </div>
                    {this.renderPasswordConfirmError()}
                    <div className="form-group">
                        <Button variant="contained" color="primary" type="submit" disabled={!this.validateForm()}>
                            Create
                        </Button>
                    </div>
                </form>
            </div>
        </div>;
    }
}


export default RegisterComponent;