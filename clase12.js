/*
Ejercicio 1: Calcular el precio final con IVA
Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una
función flecha para calcular el precio final.
*/

const prompt = require("prompt-sync")({ sigint: true });

let precio = parseFloat(prompt("Ingrese el precio del producto "));
let iva = parseFloat(prompt("Ingrese el porcentaje de IVA: "));

const calcularPrecioIva = (precio, iva) => precio + (precio * iva / 100);

let precioFinal = calcularPrecioIva(precio, iva);

console.log("El precio final con IVa es: " + precioFinal);


/*
Ejercicio 2: Calcular promedio de calificaciones
Solicita al usuario cinco calificaciones y usa una función flecha para calcular
el promedio.
*/

let notas = [];

for (let i=0; i<5; i++){
    let nota = parseInt(prompt("Ingrese una de sus notas: "));
    notas.push(nota);
};

const promedioNotas = (notas) => (notas.reduce((suma, nota) => suma + nota , 0) / 5);

console.log("El promedio de las notas es de: " + promedioNotas(notas));


/*
Ejercicio 3: Clasificación de edades
Solicita al usuario una edad y usa una función flecha para clasificarla en niño,
adolescente, adulto o adulto mayor.
*/

let edad = parseInt(prompt("Ingrese su edad: "));

const clasificarEdad = (edad) => edad < 13 ? "Niño" : ((edad >= 13) && (edad < 18)) ? "Adolescente" : (edad >= 65) ? "Adulto Mayor" : "Adulto";

console.log("Clasificación: " + clasificarEdad(edad));


/*
Ejercicio 4: Calcular descuento por cantidad
Solicita al usuario la cantidad de productos comprados y el precio unitario.
Usa una función flecha para calcular el total con descuento según la cantidad.
*/

let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos comprados: "));
let precioUnidad = parseFloat(prompt("Ingrese el precio de la unidad: "));

const descuento = (cantidadProductos) => (cantidadProductos === 0) ? 0 : ((cantidadProductos >= 5) && (cantidadProductos <= 10)) ? 5 : 10;

const precioFinal2 = (cantidadProductos, precioUnidad) => cantidadProductos*precioUnidad*(1 - descuento(cantidadProductos)/100);

console.log("El precio final con descuento es de: " + precioFinal2(cantidadProductos, precioUnidad));


/*
Ejercicio 8: Verificar origen del auto
Solicita al usuario ingresar la marca de un auto y utiliza una función flecha
para verificar y mostrar si el auto es de origen nacional o importado. Considera
que solo los autos de marcas "Chevrolet", "Ford" y "Fiat" son de origen
nacional.
✓ Solicita al usuario que ingrese la marca de un auto.
✓ Utiliza una función flecha para determinar si la marca ingresada
corresponde a un auto de origen nacional o importado.
✓ Muestra un mensaje indicando si el auto es de origen nacional o
importado, basado en la marca ingresada por el usuario.
*/

let marcaAuto = prompt("Ingrese la marca de su auto: ").toLowerCase();

const verificarOrigenAuto = (marca) => {
    let origen;

    if (marca === "chevrolet" || marca === "ford" || marca === "fiat"){
        origen = `${marca} es de origen nacional`;
    } else {
        origen = `${marca} es de origen importado`;
    };
    return origen;
};

console.log(verificarOrigenAuto(marcaAuto));
