import Jugador from "./Jugador";

function Equipo(props) {
  return props.plantilla.map((jugador, index) => {
    return (
      <Jugador
        full={false}
        apodo={jugador.apodo}
        index={index}
        nombre={jugador.nombre}
        foto={jugador.foto}
      />
    );
  });
}

export default Equipo;
