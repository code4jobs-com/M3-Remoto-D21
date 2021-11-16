import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

//Import Components

import Gatos from "./Gatos";
import Perros from "./Perros";

function App() {
  return (
    <BrowserRouter>
      <h1>Gatetes y perretes</h1>
      <div>
        <Link to="/gatos">Gatetes</Link>
        <Link to="/perros">Perretes</Link>
      </div>
      <Routes>
        <Route path="/gatos" element={<Gatos />} />
        <Route path="/perros" element={<Perros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
