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


     isUrlValid(userInput) {
        var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        if(res == null)
            return false;
        else
            return true;
    }


    validateForm() {
        return this.state.urlReference.length > 0 && this.isUrlValid(this.state.urlReference);
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
                        <Button onClick={this.handleClose} color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={this.addResource.bind(this)} color="primary" disabled={!this.validateForm()}>
                            Add
                        </Button>
                    </DialogActions>

                </div>

            </div>


        );
    }
}

export default AddLink;
