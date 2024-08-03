//------------------------------------------------------
//---------------EJERCICIO 1----------------------------
//------------------------------------------------------

const prompt = require("prompt-sync")({ sigint: true });


const costoPasajesMadrid = 850000;
const costoPasajesDubai = 1300000;
const costoPasajeMontevideo = 350000;

const costoPorValija = 78000;

const descuentoMadrid = 0;
const descuentoDubai = 10;
const descuentoMontevideo = 15;

let descuentoValido = false



let destino = prompt("Ingrese el destino que le gustaría visitar: Madrid, Dubai o Montevideo: ");
let cantidadPasajes = prompt("Ingrese la cantidad de pasajes: ");
let cantidadValijas = parseInt(prompt("Ingrese el número de valijas que serán despachadas: "));
let codidoDeDescuento = prompt("Tiene un código de descuento?: si / no : ");

if (codidoDeDescuento === "si"){
    descuentoValido = true;
};

if (destino === "Madrid"){
    let costoViajeTotal = costoPasajesMadrid*cantidadPasajes + cantidadValijas;
    if (!descuentoValido) {
        console.log("El precio total del viaje es de: " + costoViajeTotal);
    } else {
        console.log("El precio total del viaje es de: " + costoViajeTotal*(descuentoMadrid/100));
    };
} else if (destino === "Dubai"){
    let costoViajeTotal = costoPasajesDubai*cantidadPasajes + cantidadValijas;
    if (!descuentoValido) {
        console.log("El precio total del viaje es de: " + costoViajeTotal);
    } else {
        console.log("El precio total del viaje es de: " + costoViajeTotal*(descuentoDubai/100));
    };
} else if (destino === "Montevideo"){
    let costoViajeTotal = costoPasajeMontevideo*cantidadPasajes + cantidadValijas;
    if (!descuentoValido) {
        console.log("El precio total del viaje es de: " + costoViajeTotal);
    } else {
        console.log("El precio total del viaje es de: " + costoViajeTotal*(descuentoMontevideo/100));
    };
};


//------------------------------------------------------
//---------------EJERCICIO 2----------------------------
//------------------------------------------------------

//Ejercicio 2 - Comparación de Tres Números: Escribe un programa
//que pida al usuario tres números y determine cuál es el mayor de los
//tres. Muestra el número mayor en la consola.

let num1 = parseInt(prompt("Ingrese un primer número: "));
let num2 = parseInt(prompt("Ingrese un segundo número: "));
let num3 = parseInt(prompt("Ingrese un tercer número: "));

let mayor;

if (num1 < num2){
    if (num3 < num2){
        //los otros dos - num2
        mayor = num2;
    } else {
        //num1 - num2 - num3
        mayor = num3;
    };
} else {
    //num2- num1 - num3
    if (num1 < num3){
        mayor = num3;
    } else {
        //los otros dos - num1 
        mayor = num1;
    };
};

console.log(mayor);


//------------------------------------------------------
//---------------EJERCICIO 3----------------------------
//------------------------------------------------------

//Ejercicio 3 - Calculadora Simple: Escribe un programa que pida al
//usuario dos números y una operación (suma, resta, multiplicación o
//división). Luego, realiza la operación indicada y muestra el resultado en
//la consola.

let numero1 = parseFloat(prompt("Ingrese un primer número: "));
let numero2 = parseFloat(prompt("Ingrese un segundo número: "));
let operacion = prompt("Ingrese una operacion suma - resta - multiplicacion - division: ");

if (operacion === "suma"){
    console.log("El resultado es: " + (numero1+numero2));
} else if (operacion === "resta"){
    console.log("El resultado es: " + (numero1-numero2));
} else if (operacion === "multiplicaion"){
    console.log("El resultado es: " + (numero1*numero2));
} else if (operacion === "division"){
    console.log("El resultado es: " + (numero1/numero2));
} else {
    console.log("La operación no es válida");
};