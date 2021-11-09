import "./App.css";

//component imports
import Arrays from "./Arrays";

function App() {
  let array = ["paco", "jose", "josefa"];

  return (
    <>
      <ul>
        <li>{array[0]}</li>
        <li>{array[1]}</li>
        <li>{array[2]}</li>
      </ul>
      <Arrays />
    </>
  );
}

export default App;
