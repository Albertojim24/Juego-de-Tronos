import React from 'react'
import {Link} from 'react-router-dom';


const Navega = () => {
  return (
    <>
<ul>
  <li>
    <Link to="/Characters">Characters</Link>
  </li>
  <li>
    <Link to="/Houses">Houses</Link>
  </li>
  <li>
    <Link to="/Cronologia">Cronology</Link>
  </li>
</ul>
    </>
  )
}

export default Navega
