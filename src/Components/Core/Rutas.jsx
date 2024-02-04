import React from "react";
import { Route, Routes } from "react-router-dom";

import Characters from "../Pages/Characters";
import Houses from "../Pages/Houses";
import Cronologia from "../Pages/Cronologia";
import Home from "../Pages/Home";

const Rutas = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<Characters />} />
        <Route path="/casas" element={<Houses />} />
        <Route path="/cronologia1" element={<Cronologia />} />
      </Routes>
    </div>
  );
};

export default Rutas;
