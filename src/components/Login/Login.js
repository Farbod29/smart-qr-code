import React, {Component} from 'react';


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
                <div className="login-clean">
                    <form method="post">
                        <h2 className="sr-only">Login Form</h2>
                        <div className="illustration"><i className="icon ion-log-in text-primary"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="email" type="email" name="email" value={this.state.email}
                                   onChange={this.handleChange}
                                   placeholder="enter your email"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="password" type="password" name="password" value={this.state.password}
                                   onChange={this.handleChange}
                                   placeholder="enter your password"/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-outline-primary btn-block" type="submit" disabled={!this.validateForm()}>
                              Login
                            </button>
                        </div>
                        <a href="/register" className="forgot" style={{ color: '#B22222' }}>
                           "forget my password"
                        </a>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginComponent;