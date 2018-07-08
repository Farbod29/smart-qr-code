import React, {Component} from 'react';
import Header from "../Header/Header";
import TextField from "@material-ui/core/es/TextField/TextField";
import Button from "@material-ui/core/es/Button/Button";
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import DialogTitle from "@material-ui/core/es/DialogTitle/DialogTitle";
import DialogContentText from "@material-ui/core/es/DialogContentText/DialogContentText";
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/es/DialogActions/DialogActions";
import Slide from "@material-ui/core/es/Slide/Slide";


function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class Settings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            oldPassword: "",
            newPassword: "",
            confirmNewPassword: "",
            validating: false,
            validatingConfirmNewPass: false,
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    validateForm() {
        return this.state.validatingConfirmNewPass == true && this.state.oldPassword.length > 0 && this.state.newPassword.length > 0 && this.state.confirmNewPassword.length > 0;
    }

    isConfirmedPassword() {
        this.state.validating = true;
    }

    renderPasswordConfirmError= event => {

        if (this.state.validating && this.state.newPassword !== this.state.confirmNewPassword) {
            this.state.validatingConfirmNewPass = false;
            return (
                <div>
                    <label id="validConfirmPass" className="error" ref="errorMsg" style={{color: "#ff0834", fontSize:"small", float:"left"}} >Not match! Please rewrite the same password.</label>
                </div>
            );
        }
        else
            this.state.validatingConfirmNewPass = true ;
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };


    render() {

        const profile_picture = {
            borderRadius: "100%",
        };

        return (
            <div className="App container text-center">

                <Header/>

                <div className="shadow-sm mb-2 bg-white rounded card-body">
                    <img onClick={this.handleClickOpen}
                         className="img-thumbnail profile-picture"
                         style={profile_picture}
                         width={100} height={100}
                         src={"https://sarahahstorage.blob.core.windows.net/files/cce0f00c-31b7-4caa-9bfa-5cf8fcef685e.jpg"}/>

                    <h4 className="mt-3">
                        SmartQRcode Group
                    </h4>
                    <a href="#" className="text-primary font-weight-bold">
                        xxx@stud.uni-due.de
                    </a>
                    <TextField
                        id="oldPassword"
                        label="Old Password"
                        name="oldPassword"
                        placeholder="type your old password"
                        margin="normal"
                        type="password"
                        value={this.state.oldPassword}
                        onChange={this.handleChange}
                        className="form-control"
                    />
                    <TextField
                        id="newPassword"
                        label="New Password"
                        name="newPassword"
                        placeholder="type your new password"
                        margin="normal"
                        type="password"
                        value={this.state.newPassword}
                        onChange={this.handleChange}
                        className="form-control"
                    />
                    <TextField
                        id="confirmNewPassword"
                        label="New Password Confirmation"
                        name="confirmNewPassword"
                        placeholder="please rewrite your new password"
                        margin="normal"
                        type="password"
                        value={this.state.confirmNewPassword}
                        onChange={this.handleChange}
                        onFocus={this.isConfirmedPassword.bind(this)}
                        className="form-control"
                    />
                    {this.renderPasswordConfirmError()}
                    <div className="btn mt-2">
                        <Button variant="contained" color="primary" type="submit" disabled={!this.validateForm()}>
                            Change Password
                        </Button>
                    </div>
                </div>


                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    TransitionComponent={Transition}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Upload Picture</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            The file size of the photo should not exceed 10 MB
                        </DialogContentText>

                        <div className="input-group mt-2 ml-0 mr-0 p-0">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Photo</span>
                            </div>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="inputGroupFile01"/>
                                <label className="custom-file-label" htmlFor="inputGroupFile01">
                                    Choose Photo
                                </label>
                            </div>
                        </div>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Save
                        </Button>
                        <Button onClick={this.handleClose} color="secondary">
                            Remove
                        </Button>
                    </DialogActions>
                </Dialog>


            </div>
        );
    }
}

export default Settings;
