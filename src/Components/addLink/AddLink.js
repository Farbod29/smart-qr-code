import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/es/TextField/TextField";
import DialogTitle from "@material-ui/core/es/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/es/DialogActions/DialogActions";
import {addNewReferenceData} from "../../utils/Connection";
import StorageKeys from "../../utils/StorageKeys";


class AddLink extends Component {

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };
    handleClose = () => {
        this.state.context.setState({open: false});
    };

    constructor(props) {
        super(props);

        this.state = {
            titleReference: "",
            urlReference: "",
            open: props.open,
            context: props.context,
            isRequesting: false
        };
    }

    validateForm() {
        return /*this.state.titleReference.length > 0 &&*/ this.state.urlReference.length > 0;
    }

    addResource() {

        if (this.props.board != null) {
            console.log("board id >> " + this.props.board);
            let boardTagCode = this.props.board;
            this.setState({
                isRequesting: true
            });
            addNewReferenceData(this.state.urlReference, boardTagCode, localStorage.getItem(StorageKeys.USER_ID))
                .then((result) => {
                    console.log("status1: " + result);
                    if (result.status === 200) {
                        this.handleClose();
                        this.setState({
                            isRequesting: false,
                        });
                        window.location.reload();
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

        }
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
                            {/*<div className="form-group right">*/}
                            {/*<TextField*/}
                            {/*id="titleReference"*/}
                            {/*label="Title of reference"*/}
                            {/*placeholder="type title of reference"*/}
                            {/*margin="normal"*/}
                            {/*name="titleReference"*/}
                            {/*value={this.state.titleReference}*/}
                            {/*onChange={this.handleChange}*/}
                            {/*className="form-control"*/}
                            {/*/>*/}
                            {/*</div>*/}
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
                        <Button onClick={this.addResource.bind(this)} color="primary" disabled={!this.validateForm()}>
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
