import './App.css';

import Pomodoro from './components/Pomodoro/Pomodoro'
import Spotify from './components/Spotify/Spotify'
import Nav from './components/nav/Nav'
import Title from './components/title/Title'
import { useState } from 'react';

function App() {

  const[repose, setRepose] = useState(false)

  const [appStyle, setAppStyle] = useState({
    backgroundColor: "#4158D0",
    backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"
  })
  
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


  return (
    <div className="App" style={{backgroundColor: appStyle.backgroundColor, backgroundImage: appStyle.backgroundImage}}>
      <Nav style={{position:"absolute", left:"0", top:"0"}}/>
      <Title style={{position:"absolute", left:"100px", top:"0"}}/>
      <Pomodoro style={{position: "absolute", right: "6em", top: "4em", left: "6em"}} changeBackground={changeBackground} repose={repose}/>
      <Spotify style={{position: "absolute", bottom: "0"}}/>
    </div>
  );
}

export default App;
//Normal
// background-color: #4158D0;
// background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);

//Descanso
// background-color: #8EC5FC;
// background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
