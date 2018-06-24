import React from "react";
// import {IndexLink, Link} from "react-router";
import './index.css';

const Card = (props) => {
    const Person_Style = {
        'media (min-width : 500px': {
            width: '450px'
        },
        margin: '10px',
        backgroundColor: 'gray',
        display: 'inline-block',
        cursor: 'pointer',
    };
    return (
        <div className={"Person"} style={Person_Style}>
            <h2 onClick={props.click}> I'm a {props.name} and {props.age} years old</h2>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed}/>
        </div>
    )
};

export default Card;


