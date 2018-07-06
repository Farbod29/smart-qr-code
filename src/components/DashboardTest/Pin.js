import React from "react";
import {IndexLink, Link} from "react-router";


const Input = (props) => {
    return (
        <div>
            <h2 onClick={props.click}>I'm a {props.name}, and I am {props.age} years old</h2>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed}/>
        </div>
    );
};

export default Input;

