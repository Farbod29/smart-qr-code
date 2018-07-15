import React, {Component} from 'react';
import Header from "../Header/Header";
import Button from "@material-ui/core/es/Button/Button";
import {getBoardsData} from "../../utils/Connection";
import {LinkContainer} from "react-router-bootstrap";
import Card from "@material-ui/core/es/Card/Card";
import QRCode from "qrcode-react";

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boards: [],
        };
    }

    componentDidMount() {
        this.getBoards();
    }

    getBoards() {
        getBoardsData()
            .then((result) => {
                console.log("status1: " + result);
                if (result.status === 200) {
                    console.log("here 2");
                    this.setState({
                        boards: result.data.boards
                    });
                }
                else {
                    this.setState({});
                    console.log("status3: " + result);
                }
            })
            .catch(error => {
                console.log("status4: " + error);
                this.setState({});
            });
    }

    render() {

        const fab = {
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 7,
        };


        let boardsCards = this.state.boards.map((board, index) =>
            <Card key={index} className=" bg-white  m-3 col-sm-5">

                <div className="row p-2">

                    <QRCode className="col-4 m-2" value={window.location.href + "board?id=" + board.tagCode}
                            logoWidth="100px"/>

                    <LinkContainer to={"/board?id=" + board.tagCode} className="col-7 vertical-center">
                        <a className="nav-link text-dark font-weight-bold ">
                            <h3>{board.title}</h3>
                        </a>
                    </LinkContainer>
                </div>
            </Card>
        );

        return (
            <div className="App container">

                <Header/>


                <LinkContainer to="/">
                    <Button variant="fab" color="primary" style={fab}>
                        <a className="text-white">
                            +
                        </a>
                    </Button>
                </LinkContainer>

                <div className="row">
                    {boardsCards}
                </div>
            </div>
        );
    }
}

export default Board;
