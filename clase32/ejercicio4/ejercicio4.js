/*
Ejercicio 4: Ordenar una Lista de Números

Crea un script en Node.js que permita al usuario ingresar una lista de
números separados por comas. Ordena los números de menor a mayor
y muestra la lista ordenada.
*/

const readlineSync = require('readline-sync');

// Pido al usuario que ingrese una lista de números separados por comas
let lista = readlineSync.question('Ingresa una lista de números separados por comas: ');

// Convertir la cadena de entrada en un array de números
let numeros = lista.split(',').map(num => Number(num));
//La parte .map(num => Number(num)) convierte cada elemento de la lista (que originalmente es un string) en un número.

// Ordeno los números de menor a mayor usando el método .sort
let numerosOrdenados = numeros.sort((a, b) => a - b);
//(a, b) => a - b: Esta es una función de comparación que se pasa como argumento a sort(). 
//La función recibe dos elementos del array (a y b) y devuelve un número que indica su orden:
//Si a - b es negativo: a se coloca antes que b en el array.
//Si a - b es positivo: b se coloca antes que a.
//Si a - b es cero: a y b se mantienen en el mismo orden relativo.

console.log('Lista de números ordenada:', numerosOrdenados.join(', '));




