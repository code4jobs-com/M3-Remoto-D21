import { useState } from "react";
import "./App.css";

function App() {
  let array = ["Laura", "Pedro", "Jessi"];
  let index = 0;

  let [nombre, setNombre] = useState(array[0]);
  return (
    <>
      <div>
        <h1>{nombre}</h1>
      </div>
      <button
        onClick={() => {
          if (index < 2) {
            console.log(index);
            index = index + 1;
            setNombre(array[index]);
          } else {
            console.log(index);
            index = 0;
            setNombre(array[index]);
          }
        }}
      >
        click
      </button>
    </>
  );
}

export default App;
