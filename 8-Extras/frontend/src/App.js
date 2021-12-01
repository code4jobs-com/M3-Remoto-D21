import { Button, Row, Col, Form, Container } from "react-bootstrap";
import Axios from "axios";
import { useState, useEffect } from "react";

import "./App.css";

//Components import

import { Login } from "./Login";
import { Logout } from "./Logout";
import { Feedback } from "./Feedback";

function App() {
  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);
  const [variante, setVariante] = useState("");
  const [mensaje, setMensaje] = useState(null);

  useEffect(() => {
    mensaje ? setTimeout(() => setMensaje(null), 4000) : console.log("");
  }, [mensaje]);

  function perfil() {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/perfil",
    }).then((res) => {
      setMensaje(res.data.mensaje);
      res.data.logged ? setVariante("success") : setVariante("danger");
    });
  }

  return (
    <>
      <Container>
        <Row>
          {logged ? (
            <Logout
              user={user}
              setUser={setUser}
              logged={logged}
              setLogged={setLogged}
              setVariante={setVariante}
              setMensaje={setMensaje}
            />
          ) : (
            <Login
              user={user}
              setUser={setUser}
              logged={logged}
              setLogged={setLogged}
              setVariante={setVariante}
              setMensaje={setMensaje}
            />
          )}
        </Row>
      </Container>
      <Container>
        <Row>
          <Button onClick={perfil}>Información</Button>
        </Row>
      </Container>
      <Container>
        <Row>
          <Feedback variante={variante} mensaje={mensaje} />
        </Row>
      </Container>
    </>
  );
}

export default App;
