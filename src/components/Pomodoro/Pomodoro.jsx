import React, { useState} from 'react';
import Buttons from './Buttons';
import Clock from './Clock';
import Pomodoros from './Pomodoros';
import './reloj.css';
import sonido from './sonido.mp3'




const Pomodoro = (props) => {
    //Audio
    

    //Estados del reloj
    const [time, setTime] = useState({s:5, m:0});
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);
    
    //Aquí se almacenarán los pomodoros.
    const [listPomodoros, setListPomodoros] = useState([])



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
                setTime({
                    s: 5,
                    m: 0
                });
                props.changeBackground();
                if (props.repose === false) {
                    setListPomodoros([...listPomodoros,{class: "fas fa-stopwatch"}]);
                }
                var audio = new Audio(sonido).play();
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
        });
        setListPomodoros([]);
        if (props.repose) {
            props.changeBackground();
        }
    };



    return (
        <div className="clock-container" style={props.style}>
            <Pomodoros listPomodoros={listPomodoros}/>
            <Buttons  status={status} reset={reset} stop={stop} start={start}/>
            <Clock time={time}/>
        </div>
    );
};

export default Pomodoro;

