import React from 'react';

class FooterComponent extends React.Component {
    render() {
        return (
            <footer className="text-center">
                <hr/>
                &nbsp;<a href="https://github.com/Farbod29/smart-qr-code">SmartQr</a> {new Date().getFullYear()}
            </footer>
        );
    }
}

export default FooterComponent;
