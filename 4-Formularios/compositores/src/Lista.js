function Lista({ lista }) {
  return lista.map((compositor) => <li>{compositor.nombre}</li>);
}

export default Lista;
