import React from 'react';
import './title.css'

const Title = (props) => {
    return (
        <div className="title-container" style={props.style}>
            <h3>Tarea</h3>
        </div>
    );
};

export default Title;