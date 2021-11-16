import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  let array = ["Paco", "Jose", "María"];

  function Nombres() {
    return (
      <>
        {array.map((nombre) => (
          <p>{nombre}</p>
        ))}
      </>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Rutas React</h1>} />
        <Route path="/nombres" element={<Nombres />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
