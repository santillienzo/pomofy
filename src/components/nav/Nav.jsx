import React, {useState} from 'react';
import './nav.css'


const Nav = (props) => {
    //MENU STATES
    const [open, setOpen] = useState(false);
    const [openTask, setOpenTask] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);
    
    //Minutes array
    let minutesArray=[];
    for (let i = 0; i < 140; i++) {
        minutesArray[i] = i +1;
    }

    //Settings states
    const [workingTime, setWorkingTime] = useState(25);
    const [shortPause, setShortPause] = useState(5);
    const [largePause, setLargePause] = useState(15);

    //FUNCTIONS
    //Open menu
    const desplegarMenu = ()=>{
        const menu = document.getElementById('menu')
    
        if (open) {
            menu.classList.remove('animate__slideInLeft');
            menu.classList.add('animate__slideOutLeft');
            setOpenTask(false);
            setOpenSettings(false);
            setOpen(false);
        }else{
            menu.classList.remove('animate__slideOutLeft')
            menu.classList.add('animate__slideInLeft')
            menu.style.display="block";
            setOpen(true);
        }
    }

    //Close Task and settings
    const closeAll=()=>{
        setOpenTask(false)
        setOpenSettings(false)
    }

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
        <div className="nav-container" style={props.style}>
            <div className="nav-container--bars">
                <i class="fas fa-bars" onClick={desplegarMenu}></i>
            </div>

            <nav className="nav-container--menu animate__animated" id="menu">
                <div className="nav-container--menu_close">
                    {
                        openTask || openSettings ?
                        (
                            <i class="fas fa-arrow-circle-left" onClick={closeAll}></i>
                        )
                        :
                        (
                            <span></span>
                        )
                    }
                    <i class="fas fa-times" onClick={desplegarMenu}></i>
                </div>

                <div className="nav-container--menu_main-menu">
                    <ul>
                        <li onClick={()=>setOpenTask(true)}>
                            <i class="fas fa-tasks"></i>
                            <p>Tareas</p>
                        </li>
                        <li onClick={()=>setOpenSettings(true)}>
                            <i class="fas fa-cog"></i>
                            <p>Configuración</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <i class="fas fa-list"></i>
                            <p>Escoger canción</p>
                        </li>
                        <li>
                            <i class="fas fa-user"></i>
                            <p>Cuenta Spotify</p>
                        </li>
                    </ul>
                </div>
                {
                    openTask ?
                    (
                        <div className="nav-container--menu_task">
                            <ul>
                                <li>
                                    <i class="far fa-plus-square"></i>
                                    <p>Agregar Tareas</p>
                                </li>
                            </ul>
                            <ul>
                                <li className="nav-container--menu_task-task">
                                    <p>Tarea 1</p>
                                    <i class="fas fa-pen"></i>
                                    <i class="fas fa-trash-alt"></i>
                                </li>
                                <li className="nav-container--menu_task-task">
                                    <p>Tarea 2</p>
                                    <i class="fas fa-pen"></i>
                                    <i class="fas fa-trash-alt"></i>
                                </li>
                                <li className="nav-container--menu_task-task">
                                    <p>Tarea 3</p>
                                    <i class="fas fa-pen"></i>
                                    <i class="fas fa-trash-alt"></i>
                                </li>
                            </ul>
                        </div>
                    ):(null)
                }

                {
                    openSettings ?
                    (
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
                                <input type="submit" value="ok"/>
                            </form>
                        </div>
                    ):(null)
                    
                }
                
            </nav>
        </div>
    );
};

export default Nav;