import { useState } from "react";

function Libro(props) {
  const [stock, setStock] = useState(props.libro.stock);

  if (props.completo) {
    return (
      <div className="card">
        <img
          style={{ maxWidth: "6em" }}
          src={props.libro.img}
          alt={props.libro.titulo}
        />
        <h1>{props.libro.titulo}</h1>
        <h2>{props.libro.autor}</h2>
        <p>{props.libro.descripcion}</p>
        <p>{stock > 0 ? `Stock: ` + stock : "No quedan copias"}</p>
        <button onClick={() => setStock(stock - 1)}>Comprar</button>
      </div>
    );
  } else {
    return (
      <div className="card">
        <img
          style={{ maxWidth: "6em" }}
          src={props.libro.img}
          alt={props.libro.titulo}
        />
        <h1>{props.libro.titulo}</h1>
        <h2>{props.libro.autor}</h2>
        <p>{props.libro.descripcion}</p>
      </div>
    );
  }
}

export default Libro;
