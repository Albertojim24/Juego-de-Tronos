import Navega from '../Core/Navega'
import React, {useState, useEffect } from "react";
import axios from 'axios';
import CharactersDetails from './CharactersDetails';
import './Characters.css'
import { Link } from 'react-router-dom';





const Characters = () => {
  const[characters, setCharacters]= useState([]);
  const[selectedCharacter, setSelectedCharacter]= useState(null);
  const [searchTerm, setSearchTerm]=useState('')

  useEffect(()=>{
    const fetchCharacters= async()=>{
      try{
        const response = await axios.get("http://localhost:3000/characters")
        console.log(response)
        setCharacters(response.data)
    }catch(error){
      console.log("Error al obtener los personajes")
    }
    };
    fetchCharacters();
},[]);

const handleCharacterClick=(character)=>{
  setSelectedCharacter(character);
}

const filteredCharacter= characters.filter((character)=>
character.name.toLowerCase().includes(searchTerm.toLowerCase())
)
const handleSearchChange=()=>{
console.log("hola")}


  return (
    <div className='background'>
      <h1>BIENVENIDO A CHARACTERES</h1>
      <Navega></Navega>
      <div className='search-bar'>
      <img className='lupa' src='https://baam.es/Imagenes/buscar.png' alt='lupa'/>
    <input type='text'
    placeholder='Buscar personaje'
    className='form-control'
    value={searchTerm}
    onChange={handleSearchChange}/>
     </div>

      <div className='all-images'>
        {filteredCharacter.map((character)=>(
          <div  className="imagen-div" key={character.id}  >
          
          <Link to = {`/personajes/${character.id}`}>
            <img classname="image-character" src={character.image} alt='/' onClick={()=>handleCharacterClick()}/>
            </Link>

            <div className='hover'>
            <h4>{character.name}</h4>
            </div>
          </div>
        ))};
      </div>
      {selectedCharacter && (<CharactersDetails character={selectedCharacter}/>)}
    </div>
  );
}

export default Characters
