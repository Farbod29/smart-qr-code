import React, {Component} from 'react'
import QrReader from 'react-qr-scanner'
import './QrScanner.css';
import Header from "../header/Header";
import Button from "@material-ui/core/es/Button/Button";

class QrScanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delay: 150,
            result: ''
        };

        this.handleScan = this.handleScan.bind(this)
    }

    validateForm() {
        return this.state.result.length > 0 ;
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
            <div className={"App container text-center"}>
                <Header/>
                 <br/><br/><br/><br/><br/>
                 <QrReader
                    delay={this.state.delay}
                    style={previewStyle}
                    onError={this.handleError}
                    onScan={this.handleScan}
                />
                  <br/><br/><br/>
                <div className="form-group">
                    <a href={this.state.result} style={{ color: '#3267b2' }}>
                        <Button variant="contained" color="primary" type="submit" disabled={!this.validateForm()}>
                           Open Board
                        </Button>
                    </a>
                </div>
            </div>
        )
    }
}

export default QrScanner;
