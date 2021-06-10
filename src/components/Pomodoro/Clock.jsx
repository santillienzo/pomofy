import React from 'react';

const Clock = (props) => {
    return (
        <div className="clock">
            <p id="clock">
                <span id="minutes">{(props.time.m >= 10)? props.time.m : "0"+ props.time.m}</span>
                :
                <span id="seconds">{(props.time.s >= 10)? props.time.s : "0"+ props.time.s}</span>
            </p>
        </div>
    );
};

export default Clock;