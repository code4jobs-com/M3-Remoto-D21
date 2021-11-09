function Persona(props) {
  return (
    <>
      <p>En componente {props.numero}</p>
      <button
        onClick={() => {
          props.setnumero(props.numero + 1);
        }}
      >
        + Hijo
      </button>
    </>
  );
}

export default Persona;
