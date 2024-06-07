import { useState } from 'react'
import './App.css'
import HomeSongWeb from './Web/HomeSongWeb';
function App() {
  const MOVIL_NOW = 852;
  const [count, setCount] = useState(0)
  const [isMovile, setIsMovile] = useState(window.innerWidth <= MOVIL_NOW);

  window.addEventListener('resize', function() {
    let widthScreen = window.innerWidth;
    console.log("Ancho de ventana: " + widthScreen + "px");
    if (widthScreen <= MOVIL_NOW) {
      setIsMovile(true);
    }else{
      setIsMovile(false)
    }
    console.log(isMovile);
  });
  return (
      <div className = "app" >
         {isMovile ? <AppMovil/> : <HomeSongWeb/>}
      </div>
  )
}

function AppMovil(){
  return(
<div>Hola Soy movil</div>
  );
}
export default App
