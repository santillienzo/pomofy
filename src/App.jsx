import React from 'react';
import './App.css';

import Pomodoro from './components/Pomodoro/Pomodoro'
import Spotify from './components/Spotify/Spotify'
import Nav from './components/nav/Nav'
import Title from './components/title/Title'
import { useState } from 'react';

function App() {
  //STATES
  const[repose, setRepose] = useState(false)

  const [appStyle, setAppStyle] = useState({
    backgroundColor: "#4158D0",
    backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"
  })

  const [workingTime, setWorkingTime] = useState(25);
  const [shortPause, setShortPause] = useState(5);
  const [largePause, setLargePause] = useState(15);
  
  //FUNCTIONS
  //Change background and repose/work state
  const changeBackground = () =>{
    if (repose) {
      setAppStyle({
        backgroundColor: "#4158D0",
        backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"
      })
      setRepose(false)
    }else{
      setAppStyle({
        backgroundColor: "#8EC5FC",
        backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"
      })
      setRepose(true)
    }
  }

  //Change Pomodoro times
  const changePomodoroTimes = (workingTime, shortPause, largePause)=>{
    setWorkingTime(workingTime)
    setShortPause(shortPause)
    setLargePause(largePause)
    console.log('-------------')
    console.log(workingTime)
    console.log(shortPause)
    console.log(largePause)
  }


  return (
    <div className="App" style={{backgroundColor: appStyle.backgroundColor, backgroundImage: appStyle.backgroundImage}}>
      <Nav 
        style={{position:"absolute", left:"0", top:"0"}}
        changePomodoroTimes={changePomodoroTimes}
      />
      <Title 
        style={{position:"absolute", left:"100px", top:"0"}}
      />
      <Pomodoro 
        style={{position: "absolute", right: "6em", top: "4em", left: "6em"}} 
        changeBackground={changeBackground} 
        repose={repose}
        workingTime={workingTime}
        shortPause={shortPause}
        largePause={largePause}
      />
      <Spotify 
        style={{position: "absolute", bottom: "0"}}
      />
    </div>
  );
}

export default App;