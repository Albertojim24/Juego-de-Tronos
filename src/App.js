import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import Characters from "./Components/Pages/Characters";
import CharactersDetails from "./Components/Pages/CharactersDetails";

function App() {
  return (
    <div className="background-image">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/personajes" element={<Characters/>}/>
          <Route path="/personajes/:id" element={<CharactersDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
