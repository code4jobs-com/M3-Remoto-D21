import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { useState } from "react";
import "./App.css";
import catalogo from "./catalogo";

function App() {
  const [peliculas, setPeliculas] = useState(catalogo);

  function Pelicula({ pelicula, full }) {
    if (full) {
      return (
        <div className="card">
          <img src={pelicula.cartel} alt={pelicula.titulo} />
          <Link to={"/" + pelicula.titulo.replace(/ |[áéíóú]/g, "-")}>
            <h2>{pelicula.titulo}</h2>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="card">
          <p>{pelicula.sinopsis}</p>
          <Link to="/">Volver</Link>
        </div>
      );
    }
  }

  function Peliculas(props) {
    return props.peliculas.map((pelicula, index) => {
      return (
        <>
          <Pelicula key={index} full={true} pelicula={pelicula} />
        </>
      );
    });
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Peliculas peliculas={peliculas} />} />
        {peliculas.map((pelicula) => {
          console.log("/" + pelicula.titulo);
          return (
            <Route
              path={"/" + pelicula.titulo.replace(/ |[áéíóú]/g, "-")}
              element={<Pelicula pelicula={pelicula} full={false} />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
