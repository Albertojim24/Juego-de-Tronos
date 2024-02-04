import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const CharactersDetails = () => {

  const [character, setCharacter] = useState([]);
  const [houses, setHouses] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getCharacters = async () => {
      const characterApi = await fetch(`https://game-of-thrones-json-server.vercel.app/characters/${id}`);
      const characterJson = await characterApi.json();
      console.log(characterJson)
      console.log(id)
      setCharacter(characterJson);
        const housesApi = await fetch(`https://game-of-thrones-json-server.vercel.app/characters/${characterJson.house}`);
        const housesJson = await housesApi.json();
        setHouses(housesJson[0]);

      

    };

    getCharacters();
  }, []);

  return (
    <div className='character-details'>
          <div>
          <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <ul>
            
            <img src={houses} alt={houses}/>
            <p>{character.parents}</p>
            <p>{character.siblings}</p>
            <p>{character.titles}</p>
            <p>{character.alliances}</p>
            <p>{character.episodes}</p>
            <p>{character.age}</p>
            </ul>
          </div>
          <div>
  
          </div>
    </div>
  );

  }
export default CharactersDetails;
