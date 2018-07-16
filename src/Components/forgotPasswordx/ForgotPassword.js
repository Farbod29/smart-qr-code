import React, {Component} from 'react';
import Header from "../headerx/Header";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/es/TextField/TextField";

class ForgotPassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
        };
    }

    validateForm() {
        return this.state.email.length > 0;
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

                <div className="registration-clean">
                    <form method="post">
                        <h2 className="text-center" style={{color: "#0000FF"}}>Recover your account</h2>
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
                            <Button variant="contained" color="primary" type="submit"  disabled={!this.validateForm()}>
                               Send
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ForgotPassword;
