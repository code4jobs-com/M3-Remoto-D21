import Libro from "./Libro";

function Footer(props) {
  let rnd = Math.floor(Math.random() * props.libros.length);

  return (
    <Libro
      completo={false}
      libro={props.libros[rnd]}
      key={props.libros[rnd].id}
    />
  );
}

export default Footer;
