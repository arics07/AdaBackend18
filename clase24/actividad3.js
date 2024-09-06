//Módulos y require

// Crea otro archivo llamado actividad3.js que importará los datos de datos.js usando require().


// En datos.js, define un objeto que tenga información como nombreCurso, duracion, y temas (array de cadenas).
// Exporta este objeto para que pueda ser utilizado en otros archivos.


// En actividad3.js, importa el objeto usando require().
const {curso} = require('./datos.js');

// Muestra en la consola la información del curso.
console.log(curso);