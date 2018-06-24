import React, {Component} from 'react';


class LoginComponent extends Component {
    render() {
        const loginStyle = {
            boxShadow: '0px 3px 10px rgba(0, 0, 0, .25)'
        };

        return (

            <div className="App">
                <div className="login-clean">
                    <form method="post">
                        <h2 className="sr-only">Login Form</h2>
                        <div className="illustration"><i className="icon ion-log-in text-primary"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="email" name="email"
                                   placeholder="enter your email"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" name="password"
                                   placeholder="enter your password"/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-outline-primary btn-block" type="submit">
                              Login
                            </button>
                        </div>
                        <a href="/register" className="forgot" style={{ color: '#B22222' }}>
                           "forgot my password"
                        </a>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginComponent;