/*

Ejercicio 3: Convertir Datos JSON a un Objeto y Acceder a sus propiedades

Objetivo: Convertir una cadena JSON a un objeto y acceder a sus propiedades.

Instrucciones:
• Crea un archivo llamado exercise3.js.
• Define una cadena JSON que represente a un libro (incluye campos como title, author, y year).
• Convierte la cadena JSON a un objeto y muestra cada propiedad en la consola.

*/


const libroJSON = '{"title": "Estudio en escarlata", "author": "Arthur Conan Doyle", "year": 1887}';

console.log("Este es el obleto JSON: ");
console.log(libroJSON);
console.log(typeof(libroJSON));

//Convierto la cadena JSON a un objeto JS
const libroJS = JSON.parse(libroJSON);
console.log("Transformé la cadena JSON en objeto JS.")

console.log("Estas son las propiedades del objeto JS:");
console.log("Título del libro: " + libroJS.title);
console.log("Autor del libro: " + libroJS.author);
console.log("Año de publicación del libro: " + libroJS.year);
console.log(typeof(libroJS));