class Rectangulo {
  constructor(largo, ancho) {
    (this.largo = largo), (this.ancho = ancho);
  }

  calculaArea(largo = this.largo, ancho = this.ancho) {
    return largo * ancho;
  }

  calculaPerimetro(largo = this.largo, ancho = this.ancho) {
    return largo * ancho * 2;
  }
}

let patata = new Rectangulo(10, 20);

console.log(patata.calculaArea(), patata.calculaArea(30, 40));
console.log(patata.calculaPerimetro(), patata.calculaPerimetro(30, 40));
