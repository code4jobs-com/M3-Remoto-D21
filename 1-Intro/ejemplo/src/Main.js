function Main(props) {
  let edad = props.edad / 2;

  return (
    <main>
      <p>hola, {props.nombre} desde el main</p>
      <p>hoy es {props.dia}</p>
      <p>Tengo {edad}</p>
    </main>
  );
}

export default Main;
