import "./App.css";
import { useState } from "react";

//Components import

import Persona from "./Persona";

function App() {
  let [numero, setNumero] = useState(1);
  // let [numero2, setNumero2] = useState(2);
  // let [numero5, setNumero5] = useState(5);

  function sumar() {
    setNumero(numero + 1);
  }

  function restar() {
    setNumero(numero - 1);
  }

  return (
    <>
      <Persona nombre="Paco" numero={numero} setnumero={setNumero} />
      <h1>{numero}</h1>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
    </>
  );
}

export default App;
