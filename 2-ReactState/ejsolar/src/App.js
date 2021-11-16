import "./App.css";

import { useState } from "react";

import arraySolar from "./sistemasolar";

//Import components

import Planeta from "./Planeta";

function App() {
  let [sistemaSolar, setSistemaSolar] = useState(arraySolar);

  function borrarPlaneta(index) {
    let array = [...sistemaSolar];
    array.splice(index, 1);
    setSistemaSolar(array);
  }

  let sistemaPrint = sistemaSolar.map((planeta, index) => {
    return (
      <Planeta
        key={planeta.nombre}
        index={index}
        imagen={planeta.imagen}
        color={planeta.color}
        temperatura={planeta.temperatura}
        nombre={planeta.nombre}
        borrarPlaneta={borrarPlaneta}
      />
    );
  });

  return <>{sistemaPrint}</>;
}

export default App;
