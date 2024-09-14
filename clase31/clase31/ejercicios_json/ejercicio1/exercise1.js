/*
Ejercicio 1: Crear y Mostrar un Objeto JSON

Objetivo: Crear un objeto JSON simple y mostrarlo en la consola.

Instrucciones:
1. Crea un archivo llamado exercise1.js.
2. Define un objeto JSON que represente a una persona (incluye
campos como nombre, edad, y email).
3. Convierte el objeto JSON a una cadena y muéstralo en la consola.

*/


// Importamos el módulo fs
const fs = require('fs');

// defino un objeto
const objetoJSON = {
    "nombre": "León",
    "edad": 3,
    "mail": "leoncito@michi.com"
};

// convierto el objeto en una cadena JSON
const objetoJS = JSON.stringify(objetoJSON);
console.log("Cadena JSON:");
console.log(objetoJS); 

//verifico que sea un string
console.log(typeof(objetoJS));