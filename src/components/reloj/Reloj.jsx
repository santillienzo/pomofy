import React, { useState} from 'react';
import './reloj.css';


const Reloj = (props) => {
    
    let contador_m = 0;
    let contador_s = 5;

    
    const cronometer = ()=>{
        const segundos = document.getElementById('seconds');
        const minutos = document.getElementById('minutes');
        setInterval(()=>{
            if (contador_m != 0) {
                if (contador_s == 0) {
                    contador_s = 59;
                    contador_m--;
                    minutos.innerHTML = contador_m;
                }
                
                segundos.innerHTML = contador_s;
                contador_s--;
            }else{
                if (contador_s == 0) {
                    return 0;
                }
                contador_s--;
                segundos.innerHTML = contador_s;
            }
        },1000)
    }
    

    return (
        <div className="clock-container" style={props.style}>
            <div className="pomodoro-container">
                <div className="pomodoro-container--box">
                    <i class="fas fa-stopwatch"></i>
                </div>
            </div>
            <div onClick={cronometer}>play</div>
            <div className="clock">
                <p id="clock"><span id="minutes">{contador_m}</span>:<span id="seconds">{contador_s}</span></p>
            </div>
        </div>
    );
};

export default Reloj;


// if (contador_s == 60) {
//     contador_s = 0;
//     contador_m++;
//     minutos.innerHTML = contador_m;
    
//     if (contador_m==0) {
//         contador_m = 0;
//     }
// }

// segundos.innerHTML = contador_s;
// contador_s++



// console.log(contador_m)
// console.log(contador_s)
// console.log(minutos)