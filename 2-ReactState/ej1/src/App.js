import "./App.css";
import evento from "./evento";

function App() {
  function Evento(props) {
    return (
      <div>
        <h3>{props.evento.nombre}</h3>
        <h5>{props.evento.fecha}</h5>
        <h5>{props.evento.hora}</h5>
        <p>
          Dirección:
          <br />
          calle: {props.evento.lugar.direccion}
          <br /> ciudad: {props.evento.lugar.ciudad}
        </p>
      </div>
    );
  }

  return <Evento evento={evento} />;
}

export default App;
