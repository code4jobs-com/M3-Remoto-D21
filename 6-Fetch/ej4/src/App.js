import { useEffect, useState } from "react";
import "./App.css";

function Cartas({ cartas }) {
  let cartasFinal = cartas.map((carta, index) => {
    return (
      <div key={index} className="carta">
        <img src={carta.imageUrl} alt={carta.name} />
        <h3>{carta.name}</h3>
        <h5>
          Tipo: {carta.type} | Coste : {carta.manaCost}
        </h5>
        <p>{carta.text}</p>
      </div>
    );
  });

  return <div className="catalogo">{cartasFinal}</div>;
}

function App() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [select, setSelect] = useState("");

  useEffect(() => {
    fetch("https://api.magicthegathering.io/v1/sets")
      .then((res) => res.json())
      .then((datos) => {
        setData(datos.sets);
      });
  }, []);

  useEffect(() => {
    fetch(`https://api.magicthegathering.io/v1/cards?set=${select}`)
      .then((res) => res.json())
      .then((datos) => {
        setData2(datos.cards);
      });
  }, [select]);

  return (
    <>
      <select
        onChange={(e) => {
          setSelect(e.target.value);
        }}
      >
        {data.map((set) => {
          return <option value={set.code}>{set.name}</option>;
        })}
      </select>

      <Cartas cartas={data2} />
    </>
  );
}

export default App;
