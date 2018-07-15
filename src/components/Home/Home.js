import React, {Component} from 'react';
import Button from "@material-ui/core/es/Button/Button";
import TextField from "@material-ui/core/es/TextField/TextField";
import Header from "../Header/Header";
import {createNewBoardData} from "../../utils/Connection";
import QRCode from "qrcode-react";

import ReactDOM from "react-dom";

class Home extends Component {

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            boardLink: "",
            QRcode: ""
        };
    }

    validateForm() {
        return this.state.title.length > 0;
    }

    createNewBoard(event) {
        let title = this.state.title;
        createNewBoardData(title)
            .then((result) => {
                console.log("status1: " + result);
                if (result.status === 200) {
                    let boardTagCode = result.data.boardTagCode;
                    this.setState({
                        boardLink: boardTagCode
                    });
                }
                else {
                    console.log("status3: " + result);
                }
            })
            .catch(error => {
                console.log("status4: " + error);
            });
        event.preventDefault();
    }

    render() {
        return <div className="App">


            <Header/>
            <div className="login-clean">
                <form method="post"
                      onSubmit={this.createNewBoard.bind(this)}>
                    <h2>Create New Board</h2>

                    <div className="form-group">
                        <TextField
                            id="title"
                            label="title"
                            placeholder="type board title"
                            name="title"
                            value={this.state.email}
                            onChange={this.handleChange}
                            margin="normal"
                            className="form-control"/>
                    </div>

                    <div className="form-group">
                        <Button variant="contained" color="primary" type="submit" disabled={!this.validateForm()}>
                            Create
                        </Button>
                    </div>

                    {this.state.boardLink.length > 0 ? (
                        this.state.QRcode = window.location.href + "board?id=" + this.state.boardLink
                    ) : (null)}

                    <QRCode value={this.state.QRcode}/>
                </form>
            </div>
        </div>;
    }
}

export default Home;
