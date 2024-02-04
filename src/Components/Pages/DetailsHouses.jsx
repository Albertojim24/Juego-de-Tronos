import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const DetailsHouses = () => {
  const [house, setHouse] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getHouses = async () => {
      const houseApi = await fetch(`http://localhost:3000/Houses/${id}`);
    const houseJson = await houseApi.json();
     
    setHouse(houseJson[0]);
    };

    getHouses();
  }, []);

  return (
    <div className='houseDetails'>
      {house && (
        <>
          <img src={house.image} alt={house.name} />
          <h3>{house.name}</h3>
        </>
      )}
    </div>
  );
      }

export default DetailsHouses
