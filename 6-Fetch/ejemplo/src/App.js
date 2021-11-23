import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [control, setControl] = useState("");
  const [contador, setContador] = useState("0");

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${Math.floor(
        Math.random() * 100
      )}`
    )
      .then((res) => res.json())
      .then((datos) => {
        console.log(datos);
        setData(datos);
      });
  }, [control, contador]);

  return (
    <>
      <button onClick={() => setControl("patata")}>Cambiar</button>
      {contador}
      <button onClick={() => setContador(contador + 1)}>Contador</button>
    </>
  );
}

export default App;
