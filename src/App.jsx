import './App.css';

import Reloj from './components/reloj/Reloj'
import Spotify from './components/Spotify/Spotify'
import Nav from './components/nav/Nav'
import Title from './components/title/Title'

function App() {
  return (
    <div className="App">
      <Nav style={{position:"absolute", left:"0", top:"0"}}/>
      <Title style={{position:"absolute", left:"100px", top:"0"}}/>
      <Reloj style={{position: "absolute", right: "6em", top: "4em", left: "6em"}}/>
      <Spotify style={{position: "absolute", bottom: "0"}}/>
    </div>
  );
}

export default App;
