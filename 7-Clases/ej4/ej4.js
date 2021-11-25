class Finanzas {
  dolaresToEuros(dolares) {
    return dolares * 0.89;
  }

  eurosToDolares(euros) {
    return euros * 1.12;
  }
}

let patata = new Finanzas();

console.log(patata.dolaresToEuros(100), patata.eurosToDolares(100));
