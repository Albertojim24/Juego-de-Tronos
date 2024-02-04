import React from "react";
import { Route, Routes } from "react-router-dom";

import Characters from "../Pages/Characters";
import Houses from "../Pages/Houses";
// import Cronologia from "../Pages/Cronologia";
import Home from "../Pages/Home";
import Cronologia1 from "../Pages/Cronologia1";

const Rutas = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Characters" element={<Characters />} />
        <Route path="/Houses" element={<Houses />} />
        <Route path="/Cronologia1" element={<Cronologia1 />} />
      </Routes>
    </div>
  );
};

export default Rutas;
