var entrada = require('readline-sync');

var nome = entrada.question('Seu nome:');
var sobre = entrada.question('Qual seu sobrenome');

console.log('Seu nome completo é ',nome,sobre );