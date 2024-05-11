var entrada = require('readline-sync');

var valor1 = parseFloat(entrada.question('De uma nota:'));
var valor2 = parseFloat(entrada.question('De uma segunda nota:'));
var valor3 = parseFloat(entrada.question('De uma terceira nota:'));

valornota = (valor1 + valor2 + valor3 )/ 3;

console.log(valornota);