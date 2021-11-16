import { Link } from "react-router-dom";

function Peliculas(props) {
  function Pelicula({ pelicula }) {
    return (
      <div className="card">
        <img src={pelicula.cartel} alt={pelicula.titulo} />
        <Link to={"/" + pelicula.titulo}>
          <h2>{pelicula.titulo}</h2>
        </Link>
      </div>
    );
  }

  return props.peliculas.map((pelicula, index) => {
    console.log("/" + pelicula.titulo);
    return (
      <>
        <Pelicula key={index} pelicula={pelicula} />
      </>
    );
  });
}

export default Peliculas;
