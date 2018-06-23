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
                    www.ude.moodle.com
                    Here's some content for the Cards
                </Cards>
            </div>
        );
    }
}

export default Dashboard;
