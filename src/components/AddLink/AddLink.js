import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/es/TextField/TextField";
import DialogTitle from "@material-ui/core/es/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/es/DialogActions/DialogActions";


class AddLink extends Component {

    constructor(props) {
        super(props);

        this.state = {
            titleReference: "",
            urlReference: "",
            open: props.open,
            context: props.context,
        };
    }


    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleClose = () => {
        this.state.context.setState({open: false});
    };

    validateForm() {
        return this.state.titleReference.length > 0 && this.state.urlReference.length > 0;
    }

    render() {
        return (<div className="App">

                {/*<Header/>*/}


                <div>
                    <DialogTitle id="form-dialog-title">
                        Add new Resource
                    </DialogTitle>

                    <DialogContent>


                        <form method="post">
                            {/*<p className="col-12">*/}
                            {/*<h3 style={{color: "#0000FF"}}>Add new reference</h3>*/}
                            {/*</p>*/}
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

                        </form>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary" disabled={!this.validateForm()}>
                            Add
                        </Button>
                    </DialogActions>

                </div>

                {/*<div className="form-group add-link-btn">*/}
                {/*<Button variant="fab" color="primary" disabled={!this.validateForm()}>*/}
                {/*+*/}
                {/*</Button>*/}
                {/*<br/>*/}
                {/*</div>*/}
            </div>


        );
    }
}

export default AddLink;
