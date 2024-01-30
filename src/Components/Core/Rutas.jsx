import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navega from './Navega';
import Characters from '../Pages/Characters';
import Houses from '../Pages/Houses';
import Cronologia from '../Pages/Cronologia';


const Rutas = () => {
  return (
    <div>
    <BrowserRouter>
    <Navega/>
    <Routes>

  <Route  path='/Characters' element={<Characters/>} />
  <Route path='/Houses' element={<Houses/>}/>
  <Route path='/Cronologia' element={<Cronologia/>}/>
</Routes>
</BrowserRouter>
    </div>

  )
}

export default Rutas
