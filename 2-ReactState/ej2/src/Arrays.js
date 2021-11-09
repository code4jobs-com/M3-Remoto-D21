function Arrays() {
  let array = ["patata", "berenjena", "melón"];

  return (
    <ul>
      {array.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

export default Arrays;
