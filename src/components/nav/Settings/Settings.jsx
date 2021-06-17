import React, {useState} from 'react';
import './settings.css'

const Settings = (props) => {
    //Minutes array
    let minutesArray=[];
    for (let i = 0; i < 140; i++) {
        minutesArray[i] = i +1;
    }

    //Settings states
    const [workingTime, setWorkingTime] = useState(25);
    const [shortPause, setShortPause] = useState(5);
    const [largePause, setLargePause] = useState(15);

    const handleWorkingTime=(e)=>{
        setWorkingTime(e.target.value)
    }
    const handleShortPause=(e)=>{
        setShortPause(e.target.value)
    }
    const handleLargePause=(e)=>{
        setLargePause(e.target.value)
    }

    const submitSettings = (e)=>{
        e.preventDefault();
        props.changePomodoroTimes(workingTime,shortPause,largePause);
        document.getElementById('btn-reset').click();
    }

    return (
        <div className="nav-container--menu_settings">
            <form onSubmit={submitSettings}>
                <ul>
                    <li>
                        <i class="fas fa-laptop-house"></i>
                        <p>Tiempo de trabajo</p>
                        <div>
                            <select name="workingTime" value={workingTime} onChange={handleWorkingTime}>
                                {
                                    minutesArray.map(i =>(
                                        <option value={i} key={i} >{i}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </li>
                    <li>
                        <i class="fas fa-stopwatch"></i>
                        <p>Descanso corto</p>
                        <div action="">
                            <select name="shortPause" value={shortPause} onChange={handleShortPause}>
                                {
                                    minutesArray.map(i =>(
                                        <option value={i} key={i} >{i}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </li>
                    <li>
                        <i class="fas fa-stopwatch"></i>
                        <p>Descanso largo</p>
                        <div >
                            <select name="largePause" value={largePause} onChange={handleLargePause}>
                                {
                                    minutesArray.map(i =>(
                                        <option value={i} key={i} >{i}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <i class="fas fa-volume-up"></i>
                        <p>Sonido de alerta</p>
                        <div>
                            <input type="range"/>
                        </div>
                    </li>
                </ul>
                <div className="btn-submit-settings">
                    <input type="submit" value="Actualizar!"/>
                </div>
            </form>
        </div>
    );
};

export default Settings;