import React, {Component} from 'react'
import QrReader from 'react-qr-scanner'
import './QrScanner.css';
import Header from "../header/Header";
import Button from "@material-ui/core/es/Button/Button";
import {LinkContainer} from "react-router-bootstrap";

class QrScanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delay: 150,
            result: ''
        };

        this.handleScan = this.handleScan.bind(this)
    }

    handleError(err) {
        console.error(err)
    }

    handleScan(data) {
        if (data) {
            this.setState({
                result: data,
            })
        }
    }

    render() {
        const previewStyle = {
            height: 182,
            width: 270,
        };
        return (
            <div className={"centered"}>
                <Header/>
                <QrReader
                    className={"previewStyle"}
                    delay={this.state.delay}
                    style={previewStyle}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    //style={{ width: '100%' }}
                />

                <div className="form-group">
                    <a href={this.state.result} style={{ color: '#3267b2' }}>
                        <Button variant="contained" color="primary" type="submit" >
                           Open Board
                        </Button>
                    </a>
                </div>
                    {/*<Button variant="contained" color="primary" type="submit" disabled={!this.validateForm()}>*/}
                       {/*Open Board*/}
                    {/*</Button>*/}

                {/*<p className={"truncate"}> SECTION LINK : </p>*/}
            </div>
        )
    }
}

export default QrScanner;
