import React, {Component} from 'react';
import Cards from "../cards/Cards";

class Dashboard extends Component {
    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    constructor(props) {
        super(props);

        this.state = {isOpen: false};
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleModal}>
                    Open the card
                </button>
                <Cards show={this.state.isOpen}
                       onClose={this.toggleModal}>
                   <h1>www.ude.moodle.com</h1>
                   <p> here is the card</p>
                </Cards>
            </div>
        );
    }
}

export default Dashboard;
