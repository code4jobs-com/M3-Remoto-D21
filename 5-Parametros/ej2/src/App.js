import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "./App.css";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  function Operaciones() {
    let num1 = parseInt(useParams().num1);
    let num2 = parseInt(useParams().num2);
    return (
      <>
        <h3>Suma:</h3> <p>{num1 + num2}</p>
        <h3>Resta:</h3> <p>{num1 - num2}</p>
        <h3>Multiplicación:</h3> <p>{num1 * num2}</p>
        <h3>División:</h3> <p>{num1 / num2}</p>
        <h3>Resto:</h3> <p>{num1 % num2}</p>
        <Link to="/">Volver</Link>
        <button
          onClick={() => {
            setNum1(0);
            setNum2(0);
          }}
        >
          Reset
        </button>
      </>
    );
  }

  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <div>
          <button onClick={() => setNum1(num1 + 1)}>+</button>
          <h1>{num1}</h1>
          <button onClick={() => setNum1(num1 - 1)}>-</button>
        </div>
        <div>
          <button onClick={() => setNum2(num2 + 1)}>+</button>
          <h1>{num2}</h1>
          <button onClick={() => setNum2(num2 - 1)}>-</button>
        </div>
      </div>
      <Link to={`/operaciones/${num1}/${num2}`}>Operaciones</Link>
      <Routes>
        <Route path="/operaciones/:num1/:num2" element={<Operaciones />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
