import { useState } from "react";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [borrar, setBorrar] = useState("");
  const [feedback, setFeedback] = useState("");
  const [lista, setLista] = useState([
    "Wolfgang Amadeus Mozart",
    "Ludwig van Beethoven",
    "Johann Sebastian Bach",
  ]);

  function darFeedback(string) {
    setFeedback(string);
    setTimeout(() => setFeedback(""), 4000);
  }

  return (
    <>
      <ul>
        {lista.map((compositor) => (
          <li>{compositor}</li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() => {
            let array = [...lista];
            array.push(input);
            setLista(array);
            setInput("");
            darFeedback("Grabado correctamente");
          }}
        >
          Escribir
        </button>
      </div>
      <div>
        <input
          type="text"
          value={borrar}
          onChange={(e) => setBorrar(e.target.value)}
        />
        <button
          onClick={() => {
            let array = [...lista];
            let index = array.indexOf(borrar);
            if (index > 0) {
              array.splice(index, 1);
              darFeedback(`${borrar} eliminado`);
              setLista(array);
              setBorrar("");
            } else {
              darFeedback(`${borrar} no se ha encontrado`);
            }
          }}
        >
          Borrar
        </button>
      </div>
      <p>{feedback}</p>
    </>
  );
}

export default App;
