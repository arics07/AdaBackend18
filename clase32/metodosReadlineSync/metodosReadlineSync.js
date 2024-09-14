const readlineSync = require("readline-sync");

// método question
const nombre = readlineSync.question("Cuál es tu nombre? \n");
const edad = readlineSync.question("Cuál es tu edad? \n");
console.log(`Hola ${nombre}!! Tenés ${edad} años`);

//metodo questionInt
const nota = readlineSync.questionInt("Cuál fue tu nota en el TFI? \n");
console.log(`Sacaste ${nota}`);

// metodo keyInYN
//preguntas de si o no
const decision = readlineSync.keyInYN("Desea guardar los cambios? \n");
console.log(`Tu decisión fue: ${decision}`);

if (decision === true) {
    console.log(`Usted elegió YES`);
} else {
    console.log(`Usted elegió NO`);
};

//metodo keyInSelect
//muestra un menú de opciones basado en un array
//readlineSync.keyInSelect(items, prompt), donde items es un array
//almacena el indeice correpondiente a la posicion de la opcion seleccionada
//evita las entradas inválidas
let ingredientes = ["tomate", "cebolla", "chocolate", "manteca"];
const ingredienteSeleccionado = readlineSync.keyInSelect(ingredientes, "Que ingrediente desea usar? \n");
console.log(`Usted elegió ${ingredientes[ingredienteSeleccionado]}`);


