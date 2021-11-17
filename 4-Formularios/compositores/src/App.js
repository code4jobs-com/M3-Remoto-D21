import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";

//Components Import
import Lista from "./Lista";
import Eliminar from "./Eliminar";
import Cabecera from "./Cabecera";

function App() {
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [lista, setLista] = useState([
    {
      nombre: "Mozart",
      fecha: 1756,
      canciones: ["Symphonie Nr 40", "Don Giovanni"],
    },
    {
      nombre: "Ludwig van Beethoven",
      fecha: 1770,
      canciones: ["Symphonie No.5", "Piano Sonata No.32"],
    },
    {
      nombre: "Johann Sebastian Bach",
      fecha: 1685,
      canciones: ["Vivace", "Largo ma non tanto"],
    },
  ]);

  function darFeedback(string) {
    setFeedback(string);
    setTimeout(() => setFeedback(""), 4000);
  }

  return (
    <BrowserRouter>
      <Cabecera />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ul>
                <Lista lista={lista} />
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
                    array.push({ nombre: input });
                    setLista(array);
                    setInput("");
                    darFeedback("Grabado correctamente");
                  }}
                >
                  Escribir
                </button>
              </div>
            </>
          }
        />
        <Route
          path="/eliminar"
          element={
            <Eliminar
              lista={lista}
              setLista={setLista}
              darFeedback={darFeedback}
            />
          }
        />
      </Routes>
      <p>{feedback}</p>
    </BrowserRouter>
  );
}

export default App;
