import React, { useState} from 'react';
import Buttons from './Buttons';
import Clock from './Clock';
import Pomodoros from './Pomodoros';
import './reloj.css';



const Pomodoro = (props) => {

    //Estados del reloj
    const [time, setTime] = useState({s:5, m:0});
    const [interv, setInterv] = useState();
    let [status, setStatus] = useState(0);

    //Función: Comienza el contador ejecutando la función run() como un intervalo.
    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 1000));
    };

    //Definimos las variables de segundos y minutos.
    let updatedS = time.s, updatedM = time.m;

    //Función: Esta función es llamada por start() y se ejecuta en intervalo hasta que damos stop.
    const run = () => {
        if (updatedM !== 0) {
            if (updatedS === 0) {
                updatedS = 60;
                updatedM--;
            }
            updatedS--;

        }else{
            if (updatedS === 0) {
                document.getElementById('btn-stop').click();
                return false;
            }

            updatedS--;
        }

        return setTime({s:updatedS, m:updatedM});
    };

    //Función: Detiene el cronómetro.
    const stop = () => {
        clearInterval(interv);
        setStatus(0);
        return true;
    };

    //Función: Reinicia el cronómetro.
    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({
            s: 0,
            m: 25
        })
    };


    return (
        <div className="clock-container" style={props.style}>
            <Pomodoros/>
            <Buttons  status={status} reset={reset} stop={stop} start={start}/>
            <Clock time={time}/>
        </div>
    );
};

export default Pomodoro;

