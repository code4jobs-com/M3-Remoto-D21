import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import plantilla from "./plantilla";
import Equipo from "./Equipo";
import Jugador from "./Jugador";

function App() {
  const rutas = plantilla.map((jugador, index) => {
    return (
      <Route
        path={"/" + jugador.apodo.replace(/ |[áéíóú]/g, "-")}
        element={
          <Jugador
            key={index}
            full={true}
            nombre={jugador.nombre}
            apodo={jugador.apodo}
            altura={jugador.altura}
            peso={jugador.peso}
            nacionalidad={jugador.nacionalidad}
            edad={jugador.edad}
            foto={jugador.foto}
          />
        }
      />
    );
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/equipo"
          element={
            <div className="catalogo">
              <Equipo plantilla={plantilla} />
            </div>
          }
        />
        {rutas}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
