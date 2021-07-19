import React from 'react';
import Digit from '../Digit/Digit';
import './CountDown.css';

const CountDown = (props) => {
    return (
        <div className="display">
            <Digit color="palegreen" value={props.time.min} />
            <Digit color="skyblue" value={props.time.sec} />
            <Digit color="salmon" value={props.time.mill} />
        </div>
    )
}

export default CountDown