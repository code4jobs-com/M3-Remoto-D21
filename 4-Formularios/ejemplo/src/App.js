import { useState } from "react";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");

  return (
    <>
      <h1>{nombre}</h1>
      <h3>{apellido}</h3>
      <input
        type="text"
        onChange={(e) => setNombre(e.target.value)}
        value={nombre}
      />
      <input
        type="text"
        onChange={(e) => setApellido(e.target.value)}
        value={apellido}
      />
      <input
        type="text"
        onChange={(e) => setEdad(e.target.value)}
        value={edad}
      />
    </>
  );
}

export default App;
