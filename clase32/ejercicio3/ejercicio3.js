/*
Ejercicio 3: Cálculo de Hash Simple

Escribe un script en Node.js que use el módulo crypto para generar un
hash SHA-256 de un texto ingresado por el usuario. Muestra el hash en
la consola.
*/

const readlineSync = require('readline-sync');
const crypto = require('crypto');

const data = readlineSync.question("Ingrese el texto que desea hasear: \n");
const hash = crypto.createHash('sha256');
hash.update(data);
const hashOutput = hash.digest('hex');
console.log("Hash SHA-256: ", hashOutput);