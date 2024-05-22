import { useState } from 'react';
import './App.css'
import StartGame from "./components/StartGame";
import PlayGame from './components/PlayGame';

function App() {
  
const [isGameStarted,setIsGameStarted]=useState(false);
 
const toggleGame=()=>{
  setIsGameStarted((prev)=>!prev)
};
return <>{isGameStarted?<PlayGame/>:<StartGame toggle={toggleGame}/>}</>

}

export default App
