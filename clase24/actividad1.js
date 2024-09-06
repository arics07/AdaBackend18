/*
En este archivo, crea un objeto JSON que represente un libro. El objeto
debe tener las siguientes propiedades: titulo, autor, año, genero (puede
ser un array de géneros).
*/

let libro = {
                "titulo": "El sabueso de los Baskerville",
                "autor": "Arthur Conan Doyle",
                "anio": 1902,
                "genero": ["Novela policial", "Misterio"]
            };

// Muestra en la consola el título y el autor del libro.
console.log(`El título del libro es ${libro.titulo} y su autor es ${libro.autor}`);

// Actualiza el año del libro a un valor más reciente.
libro.anio = 2024;

// Añade una nueva propiedad llamada páginas que indique el número de páginas del libro.
libro.numeroPaginas = 126;

// Muestra el objeto actualizado en la consola.
console.log(libro);