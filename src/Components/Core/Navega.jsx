import React from 'react'
import {Link} from 'react-router-dom';


const Navega = () => {
  return (
    <>
<ul className='text-container'>
<li>
    <Link to="/">INICIO</Link>
  </li>
  <li>
    <Link to="/Characters">Personajes</Link>
  </li>
  <li>
    <Link to="/Casas">Houses</Link>
  </li>
  <li>
    <Link to="/Cronologia1">Cronology</Link>
  </li>
</ul>
    </>
  )
}

export default Navega
