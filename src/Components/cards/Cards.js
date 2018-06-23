import React from 'react';
import PropTypes from 'prop-types';
import './Cards.css';

class Cards extends React.Component {
    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }

        // The gray background
        return (
            <div className="backdropStyle">
                <div className="cardStyle">
                    {this.props.children}
                        <button onClick={this.props.onClose}>
                            Close
                        </button>
                    </div>
                </div>
        );
    }
}

Cards.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default Cards;
