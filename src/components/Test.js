import React, {Component} from 'react';
import Header from "./Header/Header";
//import TestComponent from "./TestComponent";

class Test extends Component {
    render() {
        return (
            <div className="App">

                <Header/>

                <div className="registration-clean">
                    <form method="post">
                        <p className="col-12">
                            Email
                        </p>
                        <div className="form-group">
                            <input type="email" name="email"
                                   placeholder="your email" className="form-control"/></div>
                        <div className="form-group">
                            <button className="btn btn-outline-primary float-right"
                                    type="submit">
                                Send
                            </button>
                            <br/>
                        </div>
                    </form>
                </div>


            </div>
        );
    }
}

export default Test;
