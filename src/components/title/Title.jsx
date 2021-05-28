import React from 'react';
import './title.css'

const Title = (props) => {
    return (
        <div className="title-container" style={props.style}>
            <h3>TP facultad</h3>
        </div>
    );
};

export default Title;