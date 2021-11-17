import { useParams, BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  function Saludo() {
    let params = useParams();

    return (
      <>
        <h2>{params.nombre}</h2>
        <h3>{params.apellidos}</h3>
      </>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/saludar/:nombre/apellido/:apellidos"
          element={<Saludo />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
