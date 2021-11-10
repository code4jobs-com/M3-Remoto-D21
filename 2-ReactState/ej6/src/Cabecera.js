import { useState } from "react";

function Cabecera(props) {
  const [esVip, setEsVip] = useState(props.usuario.vip);

  return (
    <div id="cabecera">
      <h3 style={{ display: "inline" }}>
        {esVip ? `Hola,${props.usuario.nombre}` : props.usuario.nombre}
      </h3>
      <img src={props.usuario.imagen} alt={props.usuario.nombre} />
      <button onClick={() => setEsVip(!esVip)}>Cambiar</button>
    </div>
  );
}

export default Cabecera;
