//Ejercicio 1 - Declarar dos variables:
//Nuestra tarea será declarar dos variables: una con el nombre edad y la
//otra con el nombre peso. Después deberás asignarle un valor.

let edad = 38;
let peso = 57.2;

//Ejercicio 2 – Usando las variables:
//Escribe un programa que pida al usuario que ingrese su nombre, su
//edad y su peso, y luego muestre un mensaje personalizado que incluya
//toda esta información.

const prompt = require("prompt-sync")({ sigint: true });

let nombre = prompt("Ingrese su nombre: ");
edad = prompt("Ingrese su edad: ");
peso = prompt("Ingrese su peso en kg: ");

console.log(`Su nombre es ${nombre}, su edad es ${edad} años, y su peso es de ${peso} kg.`);


//Ejercicio 3 – Constantes / Validación de Edad:
//Más adelante vamos a querer validar que nuestros encuestados sean
//de 18 años de edad mínima y 99 años de edad máxima.
//Nadie puede cambiar esas definiciones, por lo tanto, vamos a
//escribirlas en dos constantes (asignándoles los valores numéricos 18 y
//99 respectivamente). Por último, Deberás pedirle al usuario que ingrese
//su edad para validarla usando parseInt.

const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

let edadUsuario = parseInt(prompt("Ingrese su edad: "));

if (edadUsuario < EDAD_MINIMA){
    console.log("Debes ser mayor de 18 años para poder ingresar.");
} else if(edadUsuario > EDAD_MAXIMA){
    console.log("Debes ser menor de 18 años para poder ingresar.");
} else {
    console.log("Estas habilitado para ingresar.")
};


//Ejercicio 4 – Tipo de Datos:
//Declarar 4 variables utilizando la palabra reservada let y asignarles
//valores según el tipo de dato que sugiera su nombre. Además, realizar
//operaciones y validaciones adicionales sobre estos valores.
/*
Pasos a seguir:
Declaración de Variables:
1. Declara una variable llamada verdadero y asígnale un dato de tipo booleano (true o false).
2. Declara una variable llamada texto y asígnale un string de tu
elección (puedes usar cualquier mensaje que prefieras).
3. Declara una variable llamada numero y asígnale un dato numérico (puedes usar cualquier número entero o decimal).
4. Declara una variable llamada nada y asígnale un valor que represente la ausencia de valor en JavaScript.
*/

let verdadero = true;
let texto = "Hola A todos!";
let numero = 17;
let nada = null;

/*
Operaciones y Validaciones:
1. Realiza una operación matemática usando la variable número, por ejemplo, suma o resta con otro número de tu
elección.
*/
let suma = numero + 90;
console.log(suma);

/*
2. Concatena el “string” de la variable texto con otro mensaje
adicional.
*/

let concatenadas = texto + " Soy Ari :D ";
console.log(concatenadas);

/*
3. Verifica si la variable “verdadero” es true o false y muestra
un mensaje diferente según el resultado.
*/

if (verdadero){
    console.log("Es verdaderoooo! ");
} else {
    console.log("Eso es mentira... ");
};

/*
4. Implementa una condición para verificar si la variable nada
es null y muestra un mensaje si es así.
*/

if (nada === null) {
    console.log("Esta variable está vacía. NULL");
} ;


//Ejercicio 5 – Operadores:
/*
Pasos a seguir:
Declaración y Asignación de Variables:
1. Declara y asigna un valor numérico a dos variables:
primerNumero y segundoNumero.
Operaciones Matemáticas:
2. Declara las siguientes variables: resultadoSuma,
resultadoResta, resultadoMultiplicacion, resultadoDivision.
3. Asigna a cada una de estas variables el resultado de la
suma, resta, multiplicación y división de las variables
primerNumero y segundoNumero.
Mostrar Resultados:
1. Utiliza console.log(nombreDeLaVariable) para imprimir cada
uno de los resultados y ver cómo se ven los mismos.
*/

let primerNumero = 88;
let segundoNumero = 12;

let resultadoSuma = primerNumero + segundoNumero;
console.log("El resultado de la suma es: " + resultadoSuma);
let resultadoResta = primerNumero - segundoNumero;
console.log("El resultado de la resta es: " + resultadoResta);
let resultadoMultiplicacion = primerNumero * segundoNumero;
console.log("El resultado de la multiplicaión es: " + resultadoMultiplicacion);
let resultadoDivision = primerNumero/segundoNumero;
console.log("El resultado de la división es: " + resultadoDivision);


//Ejercicio 6 - Pasos a seguir:
/*
Declaración y Asignación de Variables:
1. Declara dos variables y asígnales valores numéricos de tu
elección.
Operadores de Comparación y Lógicos:
2. Utiliza los operadores > (mayor que) y && (y lógico) para
verificar si ambos números son mayores que 10.
Mostrar Resultado en la Consola:
3. Utiliza console.log() para mostrar el resultado de la
comparación.
*/

let primerValor = 30;
let segundoValor = 7;

console.log("El primer valor es mayor que 10? " + (primerValor > 10));
console.log("El segundo valor es mayor que 10? " + (segundoValor > 10));


//Ejercicio 7 - Intercambio de Valores: Declara dos variables con
//valores iniciales y luego intercambia sus valores. Muestra los valores
//antes y después del intercambio en la consola.
//Para intercambiar valores puedes usar varios métodos(usando una
//variable temporal, aritmética o asignación simultanea), eres libre de
//elegir el que desees, eso si, investiga sobre el que usaras

let valor1 = 50;
let valor2 = 4;

console.log("Los valores son: valor 1: " + valor1 + " y valor 2: " + valor2);

let guardoVariable = valor1;

valor1 = valor2;
valor2 = guardoVariable;

console.log("Los valores son: valor 1: " + valor1 + " y valor 2: " + valor2);


/* Ejercicio 8 - Conversión de Temperaturas: Escribe un programa que
convierta una temperatura dada en grados Celsius a grados Fahrenheit.
La fórmula de conversión es:
Pide al usuario que ingrese la temperatura en Celsius y muestra el
resultado en Fahrenheit.
Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
Pista 2: La fórmula puede representarse asi:
let fahrenheit = celsius * 9 / 5 + 32;
*/

let temperaturaCelsius = parseFloat(prompt("Ingrese una temperatura en °C: "));

let temperaturaFahrenheit = ((temperaturaCelsius*9)/5) + 32;

console.log("La temperatura en °F es de: " + temperaturaFahrenheit);


//Ejercicio 9: Cálculo del IMC: Escribe un programa que calcule el
//Índice de Masa Corporal (IMC).
//Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado.

let pesoIMC = parseFloat(prompt("Ingrese su peso en kg: "));
let alturaIMC = parseFloat(prompt("Ingrese su altura en metros: "));
let imc = pesoIMC/(alturaIMC*alturaIMC);
console.log("Su IMC es de: " + imc);


/*
Ejercicio 10 - Cálculo de Descuento: Escribe un programa que
calcule el precio final de un producto después de aplicar un descuento.
Pide al usuario que ingrese el precio original y el porcentaje de
descuento, y muestra el precio final.
Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
Pista 2: La fórmula puede representarse asi:
let montoDescuento = precioOriginal * (porcentajeDescuento / 100);
*/

let precioOriginal = parseFloat(prompt("Ingrese el valor del precio original del producto: "));
let porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento correspondiente: "));

let descuento = precioOriginal*(porcentajeDescuento/100);
let precioFinal = precioOriginal - descuento;

console.log("El precio final es de: " + precioFinal);
console.log("El descuento fue de: " + descuento + " pesos.");