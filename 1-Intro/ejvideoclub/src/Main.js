function Main(props) {
  function Tarjeta(props) {
    return (
      <div className="card">
        <img src={props.pelicula.cartel} alt={props.pelicula.titulo} />
        <div className="container">
          <h3>{props.pelicula.titulo}</h3>
          <p>{props.pelicula.sinopsis}</p>
        </div>
      </div>
    );
  }

  let peliculasFinal = props.peliculas.map(function (pelicula) {
    return <Tarjeta pelicula={pelicula} />;
  });

  return <div className="catalogo">{peliculasFinal}</div>;
}

export default Main;
