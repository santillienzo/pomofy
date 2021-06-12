import React from 'react';

const Pomodoros = (props) => {
    
    return (
        <div className="pomodoro-container">
            <div className="pomodoro-container--box">
                {
                    props.listPomodoros.map((element) => (
                        <i class={element.class}></i>
                    ))
                }
            </div>
        </div>
    );
};

export default Pomodoros;