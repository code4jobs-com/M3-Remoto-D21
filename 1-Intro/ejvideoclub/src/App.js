import "./App.css";
import videoclub from "./videoclub.js";

//Import componentes

import Cabecera from "./Cabecera";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Cabecera />
      <Main peliculas={videoclub.peliculas} />
      <Footer />
    </>
  );
}

export default App;
