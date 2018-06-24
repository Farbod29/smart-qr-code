import React, {Component} from 'react';
import Header from "../Header/Header";
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/es/TextField/TextField";


class AddLink extends Component {
    render() {
        return (
            <div className="App">

                <Header/>

                <div className="add-link-clean">
                    <form method="post">
                        <p className="col-12">
                            <h3>Add new reference</h3>
                        </p>
                        <div className="form-group right">
                            <TextField
                                id="title"
                                label="Title of reference"
                                margin="normal"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group right">
                            <TextField
                                id="url"
                                label="URL of reference"
                                placeholder="URL of reference"
                                margin="normal"
                                className="form-control"
                            />
                        </div>

                        <div className="form-group add-link-btn">
                            <Button variant="fab" color="primary">
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
