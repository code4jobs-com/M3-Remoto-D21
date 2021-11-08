import "./App.css";
import Cabecera from "./Cabecera";
import Main from "./Main";

let array = ["pepe", "paco", "luisa"];

function App() {
  return (
    <>
      <Cabecera />
      <Main nombre={array[2]} dia="Martes" edad={45} />
      <footer>
        <p>hola desde el footer</p>
      </footer>
    </>
  );
}

export default App;
