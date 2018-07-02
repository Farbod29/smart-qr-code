import React, {Component} from 'react';
import Cards from "../Cards/Cards";

class Dashboard extends Component {
    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    constructor(props) {
        super(props);

        this.state = {isOpen: true};
    }
    render() {
        return (
            <div>
                <Cards show={this.state.isOpen}
                       onClose={this.toggleModal}>
                    <h5>www.ude.moodle.com</h5>
                    <p> here is the card</p>
                    {/*<button onClick={this.toggleModal}>*/}
                        {/*Open the card*/}
                    {/*</button>*/}
                </Cards>
                <Cards show={this.state.isOpen}
                       onClose={this.toggleModal}>
                    <h5>www.ude.moodle.com</h5>
                    <p> here is the card</p>
                    {/*<button onClick={this.toggleModal}>*/}
                    {/*Open the card*/}
                    {/*</button>*/}
                </Cards>
                <Cards show={this.state.isOpen}
                       onClose={this.toggleModal}>
                    <h5>www.ude.moodle.com</h5>
                    <p> here is the card</p>
                    {/*<button onClick={this.toggleModal}>*/}
                    {/*Open the card*/}
                    {/*</button>*/}
                </Cards>
            </div>
        );
    }
}

export default Dashboard;


{/*<div className="App">*/
}
{/*<h1 className="App-title">Dashboard</h1>*/
}
{/*<p className="App-intro">*/
}
{/*<Dashboard/>*/
}
{/*</p>*/
}
{/*</div>*/
}
