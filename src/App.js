import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import Characters from "./Components/Pages/Characters";
import CharactersDetails from "./Components/Pages/CharactersDetails";
import Cronologia1 from "./Components/Pages/Cronologia1";
import Houses from "./Components/Pages/Houses";

function App() {
  return (
    <div className="background-image">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/personajes" element={<Characters/>}/>
          <Route path="/personajes/:id" element={<CharactersDetails/>} />
          <Route path="/" element={<Home />} />

        <Route path="/personajes" element={<Characters />} />
        <Route path="/casas" element={<Houses />} />
        <Route path="/Cronologia1" element={<Cronologia1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
