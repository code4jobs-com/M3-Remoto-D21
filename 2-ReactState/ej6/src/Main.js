import Libro from "./Libro";

function Main(props) {
  let librosFinal = props.libros.map((libro) => {
    return <Libro completo={true} key={libro.id} libro={libro} />;
  });

  return <div id="catalogo">{librosFinal}</div>;
}

export default Main;
