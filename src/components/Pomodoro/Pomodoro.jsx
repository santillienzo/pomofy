import React, { useState} from 'react';
import Buttons from './Buttons';
import Clock from './Clock';
import Pomodoros from './Pomodoros';
import './reloj.css';



const Pomodoro = (props) => {
    const [time, setTime] = useState({s:10, m:0});
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);

    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 1000));
    };

    let updatedS = time.s, updatedM = time.m;

    const run = () => {
        if (updatedM !== 0) {
            if (updatedS === 0) {
                updatedS = 60;
                updatedM--;
            }
            updatedS--;

        }else{
            if (updatedS === 0) {
                return 0;
            }

            updatedS--;
        }

        return setTime({s:updatedS, m:updatedM});
    };

    const stop = () => {
        clearInterval(interv);
        setStatus(0);
    };

    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({
            s: 0,
            m: 25
        })
    };

    const resume = () => start();

    return (
        <div className="clock-container" style={props.style}>
            <Pomodoros/>
            <Buttons  status={status} resume={resume} reset={reset} stop={stop} start={start}/>
            <Clock time={time}/>
        </div>
    );
};

export default Pomodoro;

