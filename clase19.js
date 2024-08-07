/*
Practicamos de todo un poco:
¡Como ya nos queda poco para llegar a nuestro trabajo integrador,
practicaremos en estas últimas clases todo lo visto hasta ahora! ¡Mucha
Suerte!

• Bucles y repeticiones:
1) Crear una función que pida un valor por parámetro y muestre los
10 números siguientes.
*/

const prompt = require("prompt-sync")({ sigint: true });

function diezNumerosSiguientes(numero){
    let numeros = [];
    for (let i=1; i<=10; i++){
        numeros.push(numero+i);
    };
    return numeros;
};

let numero = parseInt(prompt("Ingrese un número: "));

console.log("Los 10 números siguientes al número ingresado son: " + diezNumerosSiguientes(numero));


/*
2) Imprimir los números entre 5 y el 20, saltando de tres en tres.
*/

for (let i=5; i<=20; i=i+3){
    console.log(i);
};


/*
3) Escribir un programa que muestre la sumatoria de todos los
números entre el 0 y el 100
*/

let suma = 0;

for (let i=1; i<=100; i++){
    suma = suma + i;
};

console.log("La suma de los 100 primeros números es: " + suma);


/*
4) Dado un numero entero positivo, mostrar su factorial. Pista: El
factorial de un número se obtiene multiplicando todos los
números enteros positivos que hay entre el 1 y ese número.
*/

let numeroIngresado = parseInt(prompt("Ingrese un número: "));

function factorial(numeroIngresado){
    let factorialNumero = 1;
    for (let i=numeroIngresado; i>0; i--){
        factorialNumero = factorialNumero*i;
    };
    return factorialNumero;
};

console.log("El factorial del número ingresado es: " + factorial(numeroIngresado));


/*
5) Crear una función que muestre todos los números de la
secuencia de Fibonacci hasta el valor ingresado por parámetro.
Investigar sobre “la secuencia de Fibonacci
*/

let valorIngresado = parseInt(prompt("Ingrese un número: "));

function fibonacci(numero){
    let secuenciaFibonacci = [];
    let i = 1;
    let j = 1;
    console.log(i);
    console.log(j);
    for (k=1; k<=numero; k = i){
        let guardo = i;
        i = i + j
        console.log(i);
        j = guardo;
    };
};

fibonacci(valorIngresado);

/*
6) Crear una función que reciba un string y luego imprimir la
cantidad de vocales que se encuentran en dicha frase.
*/

let palabra = prompt("Ingrese una cadena de caracteres: ");

function contarVocales(palabra){
    let letras = Array.from(palabra);
    let cantidadVocales = 0;
    for (let i=0; i<letras.length; i++){
        if ((letras[i] === 'a') || (letras[i] === 'e') || (letras[i] === 'i') || (letras[i] === 'o') || (letras[i] === 'u')){
            cantidadVocales = cantidadVocales + 1;
        };
    };
    return cantidadVocales;
};

console.log("La cantidad de vocales es de: " + contarVocales(palabra));

/*
7) Realizar una función que, dada una lista, devuelva una nueva lista
cuyo contenido sea igual a la original pero invertida
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function invertirLista(lista){
    let listaInvertida = [];
    for (let i=lista.length-1; i>=0; i--){
        listaInvertida.push(lista[i]);
    };
    return listaInvertida;
};

console.log(invertirLista(numeros));


/*
8) Realizar una función que escriba una pirámide del 1 al 30 de la
siguiente forma:
1
22
333
4444
55555
666666
*/

function piramide(){
    for (let i=1; i<=30; i++){
        let fila = "";
        for (let j=1; j<=i; j++){
            fila = fila + i;
        };
        console.log(fila);
    };
};

piramide();


/*
9) Crear una función que imprima todos los dígitos decimales, del 0
al 9, usando un ciclo For.
*/

for (let i=0; i<10; i++){
    console.log(i);
};


/*
10) Crear una función que recibe un string en minúsculas, lo
convierta a mayúsculas y lo retorne.
*/

let cadena = prompt("Ingrese una oración en letras minúsculas: ");

function cadenaAMayusculas(cadena){
    return cadena.toUpperCase();
};

console.log(cadenaAMayusculas(cadena));


/*
11) Crear una función que recibe un parámetro y devuelve que
tipo de dato es ese parámetro.I nvestiga sobre la palabra
reservada tipeof.
*/

let dato = "das";

function tipoDeDato(dato){
    return typeof(dato);
};

console.log(tipoDeDato(dato));

/*
12) Crea una función que le pasamos el radio de un circulo y
nos devuelve la circunferencia.
*/

function circunferencia(radio){
    return (2*Math.PI*radio)
};

console.log(circunferencia(4));
