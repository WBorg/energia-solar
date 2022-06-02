import { useEffect, useState } from "react"
import {HouseLine,Sun,MoonStars} from 'phosphor-react'
import './app.css'

const KWH = 1.57;


function App() {

  const [hour, setHour] = useState(6);
  const [isActive, setIsActive] = useState(false);
  const [energy, setEnergy] = useState(0);


  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setHour(hour + 1);
    }, 1000);

    if (hour > 23) {
      setHour(0);
    }

    return () => clearInterval(interval);
  }, [hour]);

  useEffect(() => {
    if (hour > 5 && hour < 19) {
      setIsActive(true);
      setEnergy(energy + KWH);
    } else {
      setIsActive(false);
    }

    if (hour === 24) {
      setEnergy(0);
    }
  }, [hour]);

  
  

  return (

      <div className="container">
        <h1>Geração de Energia Solar </h1>
        <h2>Hora do dia: {hour}h </h2>
        {isActive
        ? <Sun size={96} weight="regular" color="yellow"/> 
        : <MoonStars size={96} weight="light" />
        }
         
         
        <HouseLine size={150} color="#9b5b31" weight="duotone" />
        <p>Quantidade de energia gerada no dia: {energy.toFixed(2)} kw/h</p>
      </div>
    
  )
}

export default App
