import Axios from "axios";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export const Login = ({
  user,
  setUser,
  logged,
  setLogged,
  setVariante,
  setMensaje,
}) => {
  const [inputEmail, setinputEmail] = useState("");
  const [inputPassword, setinputPassword] = useState("");

  function login() {
    Axios({
      method: "POST",
      data: {
        email: inputEmail,
        password: inputPassword,
      },
      withCredentials: true,
      url: "http://localhost:3001/login",
    }).then((res) => {
      console.log(res.data);
      if (res.data.logged) {
        setLogged(res.data.logged);
        setUser(res.data.user);
        setVariante("success");
        setMensaje(res.data.mensaje);
      } else {
        setLogged(res.data.logged);
        setUser(null);
        setVariante("danger");
        setMensaje(res.data.mensaje);
      }
    });
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="email"
          value={inputEmail}
          onChange={(e) => setinputEmail(e.target.value)}
        />
        <Form.Text className="text-muted">Introduce tu email</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={inputPassword}
          onChange={(e) => setinputPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" onClick={() => login()}>
        Enviar
      </Button>
    </Form>
  );
};
