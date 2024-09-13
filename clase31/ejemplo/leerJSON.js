// Importamos el módulo fs
const fs = require('fs');

// Leer el archivo JSON
// Leemos el json y lo convertimos en objeto de js
fs.readFile('persona.json', 'utf-8', (err, data) => {
    if (err) {
        console.log("Error al leer al archivo JSON: ", err);
        return
    };

    // Leemos el json 
    console.log("Contenido del archivo JSON (como texto): \n");
    console.log(data);

    //Lo convertimos en un objeto de js
    const persona = JSON.parse(data);
    //Muestro el  objeto js
    console.log("El objeto js es : \n");
    console.log(persona);

    //Accedo a los valores del objeto js
    console.log("Accedo a los valores del objeto: \n");
    console.log("Nombre: " + persona.nombre);
    console.log("Ciudad: " + persona.direccion.ciudad);
    console.log("Un hobbie: " + persona.hobbies[1]);

    //Modifico el objeto
    persona.hobbies.push("programar");

    //Muestro el objeto modificado
    console.log("Objeto modificado: \n");
    console.log(persona);
    
    //Lo guardo en el JSON
    const nuevoJSON = JSON.stringify(persona, null, 2);
    //null y 2 sirven para formatear el JSON con indentación

    //Guardo el JSON modificado
    fs.writeFile("nuevaPersona.json", nuevoJSON, (err) => {
        if (err) {
            console.log("Error al escribir el archivo JSON: ", err);
            return;
        };

        console.log();
    });

    //Leo el archivo JSON creado
    fs.readFile("nuevaPersona.json", 'utf-8', (err, data) => {
        if (err) {
            console.log("Error al leer al archivo JSON: ", err);
            return;
        };

        // Leemos el json 
        console.log("Contenido del archivo JSON (como texto) 2° parte: \n");
        console.log(data);
    });

});

