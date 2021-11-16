import { useState } from "react";

function Perros() {
  const [perros, setPerros] = useState([
    "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp",
    "https://www.cesarsway.com/wp-content/uploads/2019/10/AdobeStock_190562703.jpeg",
    "https://www.gannett-cdn.com/presto/2020/02/07/USAT/4a2add44-2e03-41a8-ba02-722c8044d711-VPC_GOLDEN_RETRIEVER_TENNIS_BALLS_DESK_THUMB.jpg?width=660&height=371&fit=crop&format=pjpg&auto=webp",
  ]);

  return (
    <>
      {perros.map((perro) => (
        <img src={perro} alt="patata" />
      ))}
    </>
  );
}

export default Perros;
