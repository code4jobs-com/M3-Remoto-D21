class Cifras {
  constructor(numero) {
    this.numero = parseInt(numero);
  }

  esPar() {
    return this.numero % 2 !== 0 ? false : true;
  }

  sumaDigitos() {
    let suma = 0;
    let cifras = this.numero.toString();

    for (let i = 0; i < cifras.length; i++) {
      suma += parseInt(cifras.substring(i, i + 1));
    }

    return suma;
  }
}

let numero = new Cifras("1234");

console.log(numero.esPar(), numero.sumaDigitos());
