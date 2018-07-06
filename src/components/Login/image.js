import React from "react";
import {IndexLink, Link} from "react-router";

export default class Footer extends React.Component {
    render() {

        return (
            <div>
                <h1> {this.props.title}</h1>
            </div>
        );
    }
}
