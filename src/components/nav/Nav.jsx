import React, {useState} from 'react';
import './nav.css'


const Nav = (props) => {
    const [activate, setActivate] = useState(false);

    const desplegarMenu = ()=>{
        const menu = document.getElementById('menu')
    
        if (activate) {
            menu.classList.remove('animate__slideInLeft');
            menu.classList.add('animate__slideOutLeft');
            setActivate(false);
        }else{
            menu.classList.remove('animate__slideOutLeft')
            menu.classList.add('animate__slideInLeft')
            menu.style.display="block";
            setActivate(true);
        }
    }
    

    return (
        <div className="nav-container" style={props.style}>
            <div className="nav-container--bars">
                <i class="fas fa-bars" onClick={desplegarMenu}></i>
            </div>

            <nav className="nav-container--menu animate__animated" id="menu">
                <div className="nav-container--menu_close">
                    <i class="fas fa-times" onClick={desplegarMenu}></i>
                </div>
                <ul>
                    <li>
                        <i class="fas fa-tasks"></i>
                        <p>Tareas</p>
                    </li>
                    <li>
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
            </nav>
        </div>
    );
};

export default Nav;