import Navega from '../Core/Navega'
import React, {useState, useEffect } from "react";
import axios from 'axios';

const Characters = () => {
  const[characters, setCharacters]= useState([]);

  useEffect(()=>{
    const fetchCharacters= async()=>{
      try{
        const response = await axios.get("https://game-of-thrones-json-server.vercel.app/characters")
        console.log(response)
        setCharacters(response.data)
    }catch(error){
      console.log("Error al obtener los personajes")
    }
    };
    fetchCharacters();
},[])
  

  return (
    <div>
      <h1>BIENVENIDO A CHARACTERES</h1>
      <Navega></Navega>

      <div className='personajes'>
        {characters.map((character)=>(
          <div key={character.id} className="cacharacter-item">
          <div className='card'>
            <img src={character.image} alt='/'/>
            <div className='cardBody'>
            <h4>{character.name}</h4>
            </div>
          </div>
          </div>
        ))};
      </div>
    </div>
  );
}

export default Characters
