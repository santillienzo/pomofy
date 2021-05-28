import React from 'react';
import './reloj.css'

const Reloj = (props) => {
    return (
        <div className="clock-container" style={props.style}>
            <div className="pomodoro-container">
                <div className="pomodoro-container--box">
                    <i class="fas fa-stopwatch"></i>
                </div>
            </div>
            <div className="clock">
                <p>12:00</p>
            </div>
        </div>
    );
};

export default Reloj;