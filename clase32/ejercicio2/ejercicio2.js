/*
Ejercicio 2: Menú Interactivo con readline-sync

Crea un script de Node.js que muestre un menú de opciones usando
readline-sync. El menú debe permitir al usuario elegir entre tres
acciones: ver un mensaje de bienvenida, generar un hash de un texto, o
salir.
*/

//npm install readline-sync
const readlineSync = require('readline-sync');

let opciones = ["Ver un mensaje de bienvenida", "Generar un hash de texto"];
const opcionSeleccionada = readlineSync.keyInSelect(opciones, "Elija una opcion: \n");
console.log(`Usted elegió ${opciones[opcionSeleccionada]}`);

switch (opcionSeleccionada) {
    case 0:
        console.log("Este es un mensaje de bienvenida: Bienvenid@!! :D ");
        break;
    case 1:
        const crypto = require('crypto');

        const data = readlineSync.question("Ingrese el texto que desea hasear: \n");
        //Se crea un objeto hash utilizando el método createHash
        const hash = crypto.createHash('sha256');
        //Se actualiza el objeto hash con los datos que queremos hashear, en este caso, el valor de la constante data
        hash.update(data);
        //digest('hex') genera el hash final en formato hexadecimal.
        const hashOutput = hash.digest('hex');
        // muestra el hash hexadecimal resultante del mensaje original 
        console.log("Hash SHA-256: ", hashOutput);
        break;

};