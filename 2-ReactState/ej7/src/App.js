import "./App.css";

//Components Import:

import Cabecera from "./Cabecera";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  let muelle = {
    nombre: "Puerto deportivo",
    barcos: [
      {
        nombre: "bar quito",
        eslora: "5m",
        tripulantes: 2,
      },
      {
        nombre: "imperioso",
        eslora: "12m",
        tripulantes: 3,
      },
    ],
    contacto: {
      telefono: "94463827",
    },
  };

  return (
    <>
      <Cabecera nombre={muelle.nombre} />
      <Main barcos={muelle.barcos} />
      <Footer telefono={muelle.contacto.telefono} />
    </>
  );
}

export default App;
