import React, {Component} from 'react';
import Button from "@material-ui/core/es/Button/Button";
import TextField from "@material-ui/core/es/TextField/TextField";
import Header from "../Header/Header";

class RegisterComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            validating: false,
            validatingConfirmPass: false,
        };
    }

    validateForm() {
        return this.state.validatingConfirmPass == true && this.state.email.length > 0 && this.state.password.length > 0 && this.state.confirmPassword.length > 0;
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

    render() {

        return <div className="App">

            <Header/>
            <div className="registration-clean">
                <form method="post">
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