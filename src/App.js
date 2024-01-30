import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Rutas from "./Components/Core/Rutas";


function App() {
  return (
    <div className="background-image">
      <BrowserRouter>
        <Rutas />
      </BrowserRouter>
    </div>
  );
}

export default App;
