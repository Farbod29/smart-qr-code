import React, {Component} from 'react';
import Header from "../Header/Header";
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/es/TextField/TextField";


class AddLink extends Component {

    constructor(props) {
        super(props);

        this.state = {
            titleReference: "",
            urlReference: "",

        };
    }

    validateForm() {
        return this.state.titleReference.length > 0 && this.state.urlReference.length > 0 ;
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

                <div className="add-link-clean">
                    <form method="post">
                        <p className="col-12">
                            <h3 style={{color: "#0000FF"}}>Add new reference</h3>
                        </p>
                        <div className="form-group right">
                            <TextField
                                id="titleReference"
                                label="Title of reference"
                                placeholder="type title of reference"
                                margin="normal"
                                name="titleReference"
                                value={this.state.titleReference}
                                onChange={this.handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group right">
                            <TextField
                                id="urlReference"
                                label="URL of reference"
                                placeholder="type URL of reference"
                                name="urlReference"
                                margin="normal"
                                value={this.state.urlReference}
                                onChange={this.handleChange}
                                className="form-control"
                            />
                        </div>

                        <div className="form-group add-link-btn">
                            <Button variant="fab" color="primary" disabled={!this.validateForm()}>
                                +
                            </Button>
                            <br/>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default AddLink;
