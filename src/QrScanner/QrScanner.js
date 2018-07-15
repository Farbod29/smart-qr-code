import React, {Component} from 'react'
import QrReader from 'react-qr-scanner'
import './QrScanner.css';
import Header from "/Users/farbodaprin/Desktop/smartqr/src/components/Header/Header.js";

class QrScanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delay: 150,
            result: ' . . ..SCAN '
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
                <p className={"truncate"}> SECTION LINK : {this.state.result}</p>
            </div>
        )
    }
}

export default QrScanner;
