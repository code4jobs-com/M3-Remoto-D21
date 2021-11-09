import "./App.css";
import garaje from "./garaje.js";

function App() {
  function Coche(props) {
    return (
      <div>
        <h4>Ford Focus:</h4>
        <p>Ruedas:{props.coche.ruedas}</p>
        <p>Altura:{props.coche.altura}</p>
        <p>Longitud:{props.coche.longitud}</p>
        <p>Color:{props.coche.color}</p>
      </div>
    );
  }

  return (
    <>
      {garaje.map((coche) => (
        <Coche coche={coche} />
      ))}
    </>
  );
}

export default App;
