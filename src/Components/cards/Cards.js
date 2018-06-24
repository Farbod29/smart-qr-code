import React from 'react';
import PropTypes from 'prop-types';
import './Cards.css';
import profile from '/Users/farbodaprin/Desktop/smartqr/src/images/img_avatar.png';

class Cards extends React.Component {
    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="card" >
                <img src={profile} className="image" />
                <div className="container">
                        {this.props.children}
                        <button>
                            Like
                        </button>
                        <button onClick={this.props.onClose}>
                        Unlike
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
