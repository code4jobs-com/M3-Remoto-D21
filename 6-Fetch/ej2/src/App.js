import { useEffect, useState } from "react";
import "./App.css";

function Planeta({ residentes }) {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Promise.all(residentes.map((personaje) => fetch(personaje)))
      .then((respuesta) => Promise.all(respuesta.map((res) => res.json())))
      .then((datos) => {
        setPersonajes(datos);
        console.log(datos);
        setLoading(false);
      });
  }, [residentes]);

  if (loading) {
    return <h1>Cargando....</h1>;
  } else {
    return (
      <ul>
        {personajes.map((individuo) => {
          return <li>{individuo.name}</li>;
        })}
      </ul>
    );
  }
}

function App() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [select, setSelect] = useState("");

  useEffect(() => {
    fetch("https://swapi.dev/api/planets")
      .then((res) => res.json())
      .then((datos) => {
        setData(datos.results);
      });
  }, []);

  useEffect(() => {
    fetch(select)
      .then((res) => res.json())
      .then((datos) => setData2(datos.residents));
  }, [select]);

  return (
    <div>
      <select
        onChange={(e) => {
          setSelect(e.target.value);
        }}
      >
        {data.map((planeta, index) => {
          return (
            <option key={planeta.name} value={planeta.url}>
              {planeta.name}
            </option>
          );
        })}
      </select>
      <Planeta residentes={data2} />
    </div>
  );
}

export default App;
