import React from "react";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import {IndexLink, Link} from "react-router";
import './ReferenceCard.css';

const UnPin = (props) => {
    return (
        <div>
            <IconButton
                onClick={props.click}
                className="ml-auto">
                {/*<i className="fa fa-thumbtack" />*/}
                {/*<i className="fa fa-thumb-tack fa_custom" style={fa_custom} />*/}
                <i className="fas fa-thumbtack fa_custom2" />
            </IconButton>
        </div>
    );
};

export default UnPin;


