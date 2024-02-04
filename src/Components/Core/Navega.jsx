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

    <Link to="/personajes">PERSONAJES</Link>
  </li>
  <li>
    <Link to="/casas">CASAS</Link>
  </li>
  <li>
    <Link to="/cronologia1">CRONOLOGIA</Link>

  </li>
</ul>
    </>
  )
}

export default Navega
