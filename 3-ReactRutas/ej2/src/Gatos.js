import { useState } from "react";

function Gatos() {
  const [gatos, setGatos] = useState([
    "https://ichef.bbci.co.uk/news/640/cpsprodpb/150EA/production/_107005268_gettyimages-611696954.jpg",
    "https://ichef.bbci.co.uk/news/976/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg",
    "https://i.insider.com/5b8407d03cccd122058b4580?width=1100&format=jpeg&auto=webp",
  ]);
  return (
    <>
      {gatos.map((gato) => (
        <img src={gato} alt="patata" />
      ))}
    </>
  );
}

export default Gatos;
