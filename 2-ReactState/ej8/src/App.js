import { useState } from "react";
import "./App.css";

function App() {
  const [tablero, setTablero] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [simbolo, setSimbolo] = useState("O");

  function grabaTablero(i) {
    let array = [...tablero];
    array[i] = simbolo;
    setTablero(array);
  }

  function pintaBoton(i) {
    return (
      <button
        onClick={() => {
          grabaTablero(i);
          cambiarSimbolo();
        }}
      >
        {tablero[i]}
      </button>
    );
  }

  function cambiarSimbolo() {
    simbolo === "O" ? setSimbolo("X") : setSimbolo("O");
  }

  function comprobar() {
    //Horizontales
    if (tablero[0] === tablero[1] && tablero[1] === tablero[2]) {
      return tablero[0];
    } else if (tablero[3] === tablero[4] && tablero[4] === tablero[5]) {
      console.log(tablero[3]);
      return tablero[3];
    } else if (tablero[6] === tablero[7] && tablero[7] === tablero[8]) {
      console.log(tablero[6]);
      return tablero[6];
      // Verticales
    } else if (tablero[0] === tablero[3] && tablero[3] === tablero[6]) {
      console.log(tablero[0]);
      return tablero[0];
    } else if (tablero[1] === tablero[4] && tablero[4] === tablero[7]) {
      console.log(tablero[1]);
      return tablero[1];
    } else if (tablero[2] === tablero[5] && tablero[5] === tablero[8]) {
      console.log(tablero[2]);
      return tablero[2];
      //Diagonales
    } else if (tablero[0] === tablero[4] && tablero[4] === tablero[8]) {
      console.log(tablero[0]);
      return tablero[0];
    } else if (tablero[2] === tablero[4] && tablero[4] === tablero[6]) {
      console.log(tablero[2]);
      return tablero[2];
    } else {
      return "";
    }
  }

  return (
    <>
      <div>
        {pintaBoton(0)}
        {pintaBoton(1)}
        {pintaBoton(2)}
      </div>
      <div>
        {pintaBoton(3)}
        {pintaBoton(4)}
        {pintaBoton(5)}
      </div>
      <div>
        {pintaBoton(6)}
        {pintaBoton(7)}
        {pintaBoton(8)}
      </div>
      <div>
        <h3>Ganador : {comprobar()}</h3>
      </div>
    </>
  );
}

export default App;
