import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function Cabecera({ contador }) {
  return (
    <header>
      <h1>Muelle de Naves</h1>
      <h1>Contador:{contador} </h1>
      <nav>
        <ul>
          <li>
            <Link to="/inicio">Barcos</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Barcos({ contador, setContador }) {
  const barcos = [
    {
      nombre: "Bar Quito",
      eslora: 5,
      tripulantes: 4,
      tipo: "recreativo",
    },
    {
      nombre: "Imperioso",
      eslora: 25,
      tripulantes: 2,
      tipo: "recreativo",
    },
  ];

  function Barco(props) {
    const [tripulantes, setTripulantes] = useState(props.tripulantes);
    return (
      <div>
        <h1>{props.nombre}</h1>
        <p>Eslora: {props.eslora}m</p>
        <p>Tripulantes: {tripulantes}</p>
        <p>Tipo: {props.tipo}</p>
        <button onClick={() => props.setContador(props.contador + 1)}>
          Sumar
        </button>
      </div>
    );
  }

  return (
    <>
      <section>
        {barcos.map(function (barco) {
          return (
            <Barco
              contador={contador}
              setContador={setContador}
              nombre={barco.nombre}
              eslora={barco.eslora}
              tripulantes={barco.tripulantes}
              tipo={barco.eslora}
            />
          );
        })}
      </section>
    </>
  );
}

function Contacto() {
  return (
    <section>
      <p>
        Para contactar preguntar en la nave al lado de la entrada o llamar al
        94.372.28.23
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy;2020</p>
    </footer>
  );
}

function App() {
  const [contador, setContador] = useState(0);
  return (
    <BrowserRouter>
      <Cabecera contador={contador} />
      <Routes>
        <Route
          path="/inicio"
          element={<Barcos contador={contador} setContador={setContador} />}
        />
        {/* <Route path="/inicio">
          <Barcos/>
        </Route> */}
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
