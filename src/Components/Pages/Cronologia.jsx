import React, { useEffect, useState } from 'react'
import Navega from '../Core/Navega'
import axios from 'axios'
import Timeline_cronologia from './Timeline_cronologia'
const Cronologia = () => {
  const [cronologias, setCronologias] = useState()
  
  useEffect(()=>{
    const getcharacters=async()=>{
      const response=await axios.get(`http://localhost:3000/characters`)
      console.log("soy getcharacters",response.data);
      setCronologias(response.data)
    }

    getcharacters()
  },[])

  return (

    <div>

      <h1>BIENVENIDO A CRONOLOGIA</h1>
      {cronologias && <Timeline_cronologia cronologias={cronologias}></Timeline_cronologia>}
      <Navega></Navega>
    </div>
  )
}

export default Cronologia
