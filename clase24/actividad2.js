//Conversión de Objetos JavaScript a JSON

/* Crea un objeto en JavaScript que represente a un estudiante con las
siguientes propiedades: nombre, edad, curso, notas (un array de
números).
*/

let estudiante = { 
                    nombre: "Tatiana Amoroso",
                    edad: 22,
                    curso: "3B",
                    notas: [10, 9, 10, 7, 9],
                };

// Convierte este objeto a una cadena JSON usando JSON.stringify().
let cadenaJson = JSON.stringify(estudiante);

// Muestra la cadena JSON en la consola.
console.log("CADENA JSON:")
console.log(cadenaJson);

// Luego, convierte la cadena JSON de nuevo a un objeto utilizando JSON.parse() y muestra el objeto en la consola.
let objetoNuevo = JSON.parse(cadenaJson);
console.log("NUEVO OBJETO:")
console.log(objetoNuevo);