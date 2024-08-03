/*
Ejercicio 1: Lugar y números
Para practicar la implementación del algoritmo de búsqueda binaria,
vamos a empezar con un ejemplo simple. Quiero que se familiaricen con
la sintaxis del mismo, por lo que no hare énfasis en los datos, sino en la
solución.
Dada la siguiente lista:

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Utilizar el algoritmo de búsqueda binaria para responder los siguientes
ítems:
o ¿Cuál es la posición del número 1?
o ¿Cuál es la posición del número 5?
o ¿Cuál es la posición del número 6?
o ¿Cuál es la posición del número 9?
o ¿Cuál es la posición del número 11?
Sabemos que responder estas preguntas es extremadamente fácil, ya
que podemos leer el array, y determinar con un cálculo visual la posición
de cada elemento, pero, la propuesta que les hago es que codeen un
algoritmo de búsqueda binaria, que “busque” ese número, por ejemplo, el
6, y nos indique por consola la posición del mismo.
El objetivo de este ejercicio es que puedan practicar la sintaxis sin añadir
complejidad extra.
*/

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const binarySearch = (list, item) => {
    //punto más bajo
    let low = 0;
    //punto más alto
    let high = list.length - 1 ;

    while (low <= high){
        //encontramos la mitad entre low y high
        let mid = Math.floor((low + high) / 2);
        //veo si el valor que busco es el que está en la mitad de la lista
        let guess = list[mid];
        //si es, la funcion devielve este valor
        if (guess === item){
            return mid;
        };
        //si no es ese valor, entonces la funcion sigue su curso
        //veo si debo buscarlo en la primera mitad de la lista o en la segunda mitad
        if (guess > item){
            high = mid - 1;
        } else {
            low = mid + 1;
        };
    };
    //si no encuentra nada, retorna null
    return null;
};

console.log("El valor 1 está en el índice: " + binarySearch(list,1));
console.log("El valor 5 está en el índice: " + binarySearch(list,5));
console.log("El valor 6 está en el índice: " + binarySearch(list,6));
console.log("El valor 9 está en el índice: " + binarySearch(list,9));
console.log("El valor 11 está en el índice: " + binarySearch(list,11));

/*
Ejercicio 2: Desafío extra! Orden, lugar y números
Al ejercicio anterior vamos a aumentarle la dificultad un poco, y de paso,
aplicamos lo aprendido en semanas anteriores. Quiero que hagan lo
mismo del ejercicio anterior (buscar la posición de un número en un
array), pero partiendo de esta lista:

let list = [12, 3, 5, 7, 1, 22, 47, 100];

Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor
a mayor, utilizando bubble sort. Luego, respondan las siguientes
preguntas:
o ¿Cuál es la posición del número 12?
o ¿Cuál es la posición del número 5?
o ¿Cuál es la posición del número 22?
o ¿Cuál es la posición del número 100?
*/

let lista = [12, 3, 5, 7, 1, 22, 47, 100];
console.log("Lista desordenada: " + lista);
//Vamos a ordenar la lista de menor a mayor usando Bubble Sort

for (let i= 0; i<lista.length; i++){
    for (let j=0; j<lista.length-1; j++){
        //Si el elemento actual es mayor que el siguiente, se intercambian
        if (lista[j] > lista[j+1]){
            let temp = lista[j]; 
            lista[j] = lista[j+1];
            lista[j+1] = temp;
        };
    };
};

console.log("Lista ordenada: " + lista);