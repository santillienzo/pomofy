import React from 'react';

const Buttons = (props) => {
    return (
        <div className="btns-container">  
            {
                (props.status === 0)?
                <div className="btns-container--btn"  onClick={props.start} title="Iniciar"><i class="far fa-play-circle"></i></div>
                :
                <div className="btns-container--btn" onClick={props.stop} id="btn-stop" title="Pausa"><i class="far fa-pause-circle"></i></div>
            }
            
            <div className="btns-container--btn" onClick={props.reset} id="btn-reset" title="Terminar Pomodoro"><i class="far fa-stop-circle"></i></div>
        </div>
    );
};

export default Buttons;