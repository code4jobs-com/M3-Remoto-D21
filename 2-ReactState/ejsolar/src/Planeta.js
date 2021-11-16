function Planeta(props) {
  return (
    <div>
      <img
        style={{ maxWidth: "150px" }}
        src={props.imagen}
        alt={props.nombre}
      />
      <h1>{props.nombre}</h1>
      <p>Color: {props.color}</p>
      <p>Temperatura: {props.temperatura}</p>
      <button onClick={() => props.borrarPlaneta(props.index)}>
        Borrar {props.nombre}
      </button>
    </div>
  );
}

export default Planeta;
