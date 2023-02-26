let lista = [100, 5, 10, 2];
var teste = lista.reduce((x, y) => x % y == 0 ? x / y : x * y);
console.log(teste);