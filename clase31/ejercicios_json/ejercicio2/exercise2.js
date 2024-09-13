/*
Ejercicio 2: Leer y Modificar un Archivo JSON

Objetivo: Leer datos de un archivo JSON, modificarlos y guardarlos nuevamente.

Instrucciones:
• Crea un archivo llamado data.json con el siguiente contenido:

{
    "name": "Bob",
    "age": 30,
    "email": "bob@example.com"
}

• Crea un archivo llamado exercise2.js.
• Lee el archivo data.json, modifica el campo age a un nuevo valor, y guarda el archivo modificado.
*/

// Importamos el módulo fs
const fs = require('fs');

fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err) {
        console.log("Error al leer al archivo JSON: ", err);
        return
    };

    // Leo el json 
    console.log("Contenido del archivo JSON (como texto): \n");
    console.log(data);

    //Lo convertimos en un objeto de js
    const persona = JSON.parse(data);
    //Muestro el  objeto js
    console.log("El objeto js es : \n");
    console.log(persona);

    //Modifico la edad
    persona.age = 38;

    //Muestro el objeto modificado
    console.log("Objeto modificado:");
    console.log(persona);
    
    const nuevoJSON = JSON.stringify(persona, null, 2);
    //null y 2 sirven para formatear el JSON con indentación

    //Guardo el JSON modificado
    fs.writeFile("nuevaData.json", nuevoJSON, (err) => {
        if (err) {
            console.log("Error al escribir el archivo JSON: ", err);
            return;
        };

        console.log("Se escribió el archivo JSON correctamente.");
    });

    //Leo el archivo JSON creado
    fs.readFile("nuevaData.json", 'utf-8', (err, data) => {
        if (err) {
            console.log("Error al leer al archivo JSON: ", err);
            return;
        };

        // Leemos el json 
        console.log("Contenido del archivo JSON (como texto) 2° parte: \n");
        console.log(data);
    });

});


