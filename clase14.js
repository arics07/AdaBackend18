/*
Ejercicio 1: El deportista
Para este ejercicio deberán definir un objeto literal “deportista”, con los
siguientes atributos: nombre, energía, experiencia.
Ademas queremos poder pedirle al deportista que entrene. Para esto,
nuestro trabajo va a ser realizar una función “entrenarHoras.”
La función entrenarHoras tiene las siguientes tres características:
✓ Recibe por parámetro la cantidad de horas.
✓ Resta a su energía (this.energia) la cantidad de horas x 5.
✓ Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
Una vez definida la función, podemos ejecutar el código y ver cómo va
variando la energía y experiencia del deportista por consola.
*/

let deportista = {
    nombre: "Novak Djokovic",
    energia: 80,
    experiencia: 34,

    entrenarHoras: function(horas){
        //energia
        if (this.energia>=(horas*5)){
            this.energia = this.energia - (horas*5);
        } else {
            this.energia = 0;
        }
        //experiencia
        this.experiencia = this.experiencia * 2;

    }
};

//console.log(deportista.energia);
//console.log(deportista.experiencia);
//deportista.entrenarHoras(7);
//console.log(deportista.energia);
//console.log(deportista.experiencia);


/*
Ejercicio 2: Libros
Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
✓ título: una cadena con el título del libro.
✓ autor: una cadena con el nombre del autor del libro.
✓ anioPublicacion: un número con el año de publicación del libro.
Luego, crea una función llamada mostrarLibro que tome un arreglo de libros
como parámetro y muestre por consola la información de cada libro en el
formato especificado.
*/

let libro1 = {
    titulo: "Emma",
    autor: "Jane Austen",
    anioPublicaion: 1815,
};


let libro2 = {
    titulo: "Relatos de un naufrago",
    autor: "Gabriel Garcia Marquez",
    anioPublicaion: 1955,
};

let arregloDeLibros = [ libro1, libro2];

let mostrarLibro = function(arregloDeLibros) {
    
    for (let i=0; i<arregloDeLibros.length; i++){
        console.log(arregloDeLibros[i].titulo + ", " + arregloDeLibros[i].autor + ", " + arregloDeLibros[i].anioPublicaion);
    };
};

mostrarLibro(arregloDeLibros);


/*
Ejercicio 3: Funcion backEnd()
Creá la función backEnd() que recibirá 2 números como parámetros. La
función deberá imprimir por pantalla los números del 1 al 100, pero teniendo
en cuenta los siguientes criterios:
✓ Si el número a imprimir es múltiplo del primer parámetro que se
ingresó, deberá mostrar el string “Back” en lugar del número.
✓ Si el número a imprimir es múltiplo del segundo parámetro ingresado,
deberá mostrar el string “End” en su lugar del número.
✓ Si el número a imprimir es múltiplo de ambos parámetros, deberá
mostrar el string “Back End” en lugar del número.
*/

function backEnd(num1, num2) {
    for (let i=1; i<=100; i++){
        if (i % num1 === 0){
            if (i % num2 === 0){
                console.log("BackEnd");
            } else {
                console.log("Back")
            };
        } else if (i % num2){
            console.log("End");
        }
    };
};

backEnd(2, 5);


/*
Ejercicio 4: Última aparición de un modelo de auto
En este ejercicio, trabajaremos con una lista de modelos de autos.
Implementa una función ultimaAparicionModeloAuto(modelo) que encuentre
y muestre la última posición en la lista donde aparece el modelo específico
de auto dado por modelo.
Datos Iniciales:
✓ Utiliza un array llamado modelosAutos que contenga varios modelos
de autos, algunos repetidos para demostrar la funcionalidad de
lastIndexOf.
Funcionalidad:
✓ Implementa ultimaAparicionModeloAuto(modelo), que toma modelo
como parámetro (un string) y utiliza el método lastIndexOf para
encontrar la última posición en modelosAutos donde modelo aparece.
✓ Si modelo se encuentra en el array, imprime por consola la posición
encontrada (índice + 1 para mostrar el número de posición).
✓ Si modelo no está en el array, imprime un mensaje indicando que el
modelo no está presente.
*/

let modelosAutos = ["Honda", "Tesla", "Ford", "Mercedes", "Tesla", "BMW"];

function ultimaAparicionModeloAuto(modelo){
    if (modelosAutos.includes(modelo)){
        console.log(modelosAutos.lastIndexOf(modelo));
    } else {
        console.log("El modelo no está presente");
    };
    
};

ultimaAparicionModeloAuto("Tesla");
ultimaAparicionModeloAuto("Renault");


/*
Ejercicio 5: Flores Favoritas
Escribe un programa en JavaScript para contar cuántas veces el usuario
menciona sus flores favoritas. Utiliza un array para almacenar las flores
favoritas y realiza las siguientes acciones:
1. Inicializa un array vacío para almacenar las flores favoritas.
2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y
agrega cada una al array (aquí usa un método de los vistos en Arrays)
3. Pregunta al usuario por una flor específica y verifica si está entre sus
favoritas (aquí usa un método de los vistos en Arrays)
4. Muestra por consola cuántas de las flores favoritas se mencionaron.
Pista: Se utiliza el método includes.
*/

const prompt = require("prompt-sync")({ sigint: true });

let floresFavoritas = [];

for (let i=0; i<3; i++){
    let flor = prompt("Ingrese alguna de sus flores favoritas: ");
    floresFavoritas.push(flor);
};



let acumulador = 0;
let sigue = true;

while (sigue){

    let flor = prompt("Ingrese una flor: ");
    let esta = floresFavoritas.includes(flor);
    
    if (esta){
        console.log("La flor se encuentra entre sus favoritas.");
        acumulador = acumulador + 1;
    } else {
        console.log("La flor no se encuentra entre sus favoritas.");
    };
    let decision = parseInt(prompt("Si quiere ingresar otra flor, ingrese 1 "));
    if (decision !== 1){
        sigue = false;
    };
};

console.log("Sus flores favoritas se mencionaron " + acumulador + " veces");


