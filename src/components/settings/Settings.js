import React, {Component} from 'react';
import Header from "../header/Header";
import TextField from "@material-ui/core/es/TextField/TextField";
import Button from "@material-ui/core/es/Button/Button";
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import DialogTitle from "@material-ui/core/es/DialogTitle/DialogTitle";
import DialogContentText from "@material-ui/core/es/DialogContentText/DialogContentText";
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/es/DialogActions/DialogActions";
import Slide from "@material-ui/core/es/Slide/Slide";
import StorageKeys from "../../utils/StorageKeys";
import {changePasswordData, loginData, uploadPhotoData} from "../../utils/Connection";
import FileBase64 from 'react-file-base64';


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
            isRequesting: false,
            file: []
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

    componentDidMount() {
        if (localStorage.getItem(StorageKeys.USER_ID) === null || localStorage.getItem(StorageKeys.USER_ID).length === 0 ){
            this.props.history.push('/login');
        }
    }


    changePassword(event){
        this.setState({
            isRequesting: true,
        });
        changePasswordData(localStorage.getItem(StorageKeys.USER_ID), this.state.oldPassword, this.state.newPassword)
            .then((result) => {
                console.log("status1: " + result);
                if (result.status === 200) {
                    console.log("status2: ");
                    this.setState({
                        isRequesting: false,
                    });
                }
                else {
                    this.setState({
                        isRequesting: false,
                        errorMessage: result.response.data.message
                    });
                    console.log("status3: " + result);
                }
            })
            .catch(error => {
                console.log("status4: " + error);
                this.setState({
                    isRequesting: false,
                    errorMessage: error.response.data.message
                });
            });
        event.preventDefault();
    }

    getFiles(files){
        this.setState({ file: files })
        console.log(this.state.file)
    }



    uploadPhoto() {
        uploadPhotoData(localStorage.getItem(StorageKeys.USER_ID), this.state.file.base64)
            .then((result) => {
                console.log("status1: " + result);
                if (result.status === 200) {
                    console.log("status2: ");
                    localStorage.setItem(StorageKeys.PHOTO_URL, StorageKeys.BASE_API_URL + result.data.path);
                    this.handleClose();
                }
                else {
                    console.log("status3: " + result);
                }
            })
            .catch(error => {
                console.log("status4: " + error);
            });
    }

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
                         src={localStorage.getItem(StorageKeys.PHOTO_URL)}/>

                    <h4 className="mt-3">
                        {localStorage.getItem(StorageKeys.EMAIL)}
                    </h4>

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
                        <Button variant="contained" color="primary" type="submit"
                                onClick={this.changePassword.bind(this)} disabled={!this.validateForm()}>
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

                            <div className="custom-file">

                                <FileBase64 type="file" className="custom-file-input" id="inputGroupFile01"
                                    onDone={ this.getFiles.bind(this) } />

                            </div>
                        </div>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.uploadPhoto.bind(this)} color="primary">
                            Save
                        </Button>
                        <Button onClick={this.handleClose} color="secondary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>


            </div>
        );
    }
}

export default Settings;
