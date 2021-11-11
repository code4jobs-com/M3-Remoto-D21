import { useState } from "react";

function Main({ barcos }) {
  function Barco({ nombre, eslora, tripulantes }) {
    const [pasajeros, setPasajeros] = useState(tripulantes);
    return (
      <div>
        <h4>{nombre}</h4>
        <h6>eslora: {eslora}</h6>
        <p>tripulantes: {pasajeros}</p>
        <button onClick={() => setPasajeros(pasajeros + 1)}> Embarcar </button>
      </div>
    );
  }

  let armada = barcos.map((barco) => (
    <Barco
      nombre={barco.nombre}
      estlora={barco.eslora}
      tripulantes={barco.tripulantes}
    />
  ));

  return <div>{armada}</div>;
}

export default Main;
