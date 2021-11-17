import { useState } from "react";

function Eliminar({ lista, setLista, darFeedback }) {
  const [borrar, setBorrar] = useState("");

  function eliminarCompositor(nombre) {
    let array = [...lista];
    let array2 = array.filter(
      (compositor) => compositor.nombre.toLowerCase() !== nombre.toLowerCase()
    );
    if (array.length !== array2.length) {
      darFeedback(`${nombre} eliminado`);
      setLista(array2);
      setBorrar("");
    } else {
      darFeedback(`${nombre} no se ha encontrado`);
    }
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={borrar}
          onChange={(e) => setBorrar(e.target.value)}
        />
        <button onClick={() => eliminarCompositor(borrar)}>Borrar</button>
      </div>
    </>
  );
}

export default Eliminar;
