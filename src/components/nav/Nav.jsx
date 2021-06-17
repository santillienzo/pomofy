import React, {useState} from 'react';
import './nav.css'
import Settings from './Settings/Settings';
import Tasks from './Tasks/Tasks';


const Nav = (props) => {
    //MENU STATES
    const [open, setOpen] = useState(false);
    const [openTask, setOpenTask] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);
    
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
                        <li onClick={()=>{setOpenTask(true)}}>
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
                        <Tasks/>
                    ):(null)
                }

                {
                    openSettings ?
                    (
                        <Settings
                            changePomodoroTimes={props.changePomodoroTimes}
                        />
                    ):(null)
                    
                }
                
            </nav>
        </div>
    );
};

export default Nav;