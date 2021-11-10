import { useState } from "react";

function Cabecera(props) {
  const [esVip, setEsVip] = useState(props.usuario.vip);

  return (
    <div>
      <img
        style={{ maxWidth: "6em" }}
        src={props.usuario.imagen}
        alt={props.usuario.nombre}
      />
      <h3 style={{ display: "inline" }}>
        {esVip ? `Hola,${props.usuario.nombre}` : props.usuario.nombre}
      </h3>
      <button onClick={() => setEsVip(!esVip)}>Cambiar</button>
    </div>
  );
}

export default Cabecera;
