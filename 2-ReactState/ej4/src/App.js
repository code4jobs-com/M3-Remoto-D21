import { useState } from "react";
import "./App.css";

function App() {
  let [contador, setContador] = useState(0);
  return (
    <>
      <h1>{contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </>
  );
}

export default App;
