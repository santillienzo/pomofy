import React, { useState} from 'react';
import Buttons from './Buttons';
import Clock from './Clock';
import Pomodoros from './Pomodoros';
import './reloj.css';
import sonido from './sonido.mp3'




const Pomodoro = (props) => {
    

    //Estados del reloj
    const [time, setTime] = useState({s:0, m:props.workingTime});
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
                document.getElementById('btn-stop').click(); //Pausamos el Pomodoro haciendo click en el btn de pause.
                let audio = new Audio(sonido).play();   //Reproducimos el sonido de notificación
                if (props.repose === false) {   //Si no estamos en reposo:
                    setListPomodoros([...listPomodoros,{class: "fas fa-stopwatch"}]);   //Añadimos un pomodoro
                    if((listPomodoros.length+ 1)%4 === 0){
                        setTime({ 
                            s: 0,
                            m: props.largePause
                        }); //Actualizamos el tiempo de descanso.
                    }else{
                        setTime({ 
                            s: 0,
                            m: props.shortPause
                        }); //Actualizamos el tiempo de descanso.
                    }
                }else{
                    setTime({ 
                        s: 0,
                        m: props.workingTime
                    }); //Actualizamos el tiempo de descanso.
                }
                audio = null;   //Eliminamos el objeto para liberar memoria
                props.changeBackground(); //Ejecutamos la función para cambiar el estado de 'working' a 'repose' y cambiamos color.
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
            m: props.workingTime
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

