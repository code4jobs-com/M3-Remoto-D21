import React from "react";
import "./App.css";
import { useState } from "react";

class Patata extends React.Component {
  render() {
    return <h1>Hello, Patata</h1>;
  }
}

/* class Libro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: this.props.titulo,
      autor: this.props.autor,
      paginas: 1121,
    };
    this.quitarPagina = this.quitarPagina.bind(this);
  }

  quitarPagina = function () {
    let valorNuevo = this.state.paginas - 1;
    this.setState({ paginas: valorNuevo });
  };

  render() {
    return (
      <>
        <h1>El título del libro es {this.state.titulo}</h1>
        <h1>El autor del libro es {this.state.autor}</h1>
        <button onClick={this.quitarPagina}>Quitar página</button>
      </>
    );
  }
} */

function Libro(props) {
  const [titulo, setTitulo] = useState(props.titulo);
  const [autor, setAutor] = useState(props.autor);
  const [paginas, setPaginas] = useState(1121);

  return (
    <>
      <h1>El título del libro es {titulo}</h1>
      <h1>El autor del libro es {autor}</h1>
      <button onClick={() => setPaginas(paginas - 1)}>Quitar página</button>
    </>
  );
}

function App() {
  return (
    <>
      <Patata />;
      <Libro titulo="La patata vengativa" autor="Patatín" />
    </>
  );
}

export default App;
