/*
Ejercicio 1: map() “Hagamos lío...”
Nos dejaron una lista con los horarios de partida de algunos aviones. Esta
lista se reproduce directamente en las pantallas del aeropuerto y, a modo
de travesura, queremos adelantar una hora cada partida.
Nuestro trabajo será utilizar el método map para poder lograrlo y
almacenar la lista en una variable nueva llamada horariosAtrasados.
Además de hacer esto, deberemos realizar las siguientes operaciones:
✓ Añadir un nuevo horario al principio de la lista: Usamos unshift para
agregar el horario 10 al principio.
✓ Eliminar el último horario de la lista: Usamos pop para eliminar el
último horario y lo guardamos en ultimoHorario.
✓ Verificar si el horario 14 está en la lista y agregarlo al final si no está
presente: Usamos includes para verificar si 14 está en la lista y
push para agregarlo si no está.
✓ Encontrar la posición del horario 18 y eliminarlo si está presente:
Usamos indexOf para encontrar la posición de 18 y splice para
eliminarlo si está presente.
✓ Añadir el horario eliminado en el paso 2 al final de la nueva lista de
horarios atrasados: Usamos push para agregar el ultimoHorario
(adelantado una hora) al final de horariosAtrasados.
✓ Mostrar la lista final de horarios atrasados: Mostramos la lista por
consola.
✓ Eliminar el primer elemento de la lista de horarios atrasados:
Usamos shift para eliminar el primer elemento.
✓ Verificar si el horario 9 está en la lista y agregarlo al principio si no
está presente: Usamos includes para verificar si 9 está en la lista y
unshift para agregarlo si no está.
✓ Por último, mostrar la lista final después de todas las operaciones
*/

let horariosPartida = [12, 14, 18, 21];
console.log(horariosPartida);

let horariosAtrasados = horariosPartida.map(horario => horario - 1);
console.log(horariosAtrasados);

//✓ Añadir un nuevo horario al principio de la lista: Usamos unshift para
//agregar el horario 10 al principio.
horariosPartida.unshift(10);
console.log(horariosPartida);

//✓ Eliminar el último horario de la lista: Usamos pop para eliminar el
//último horario y lo guardamos en ultimoHorario.
let ultimoHorario = horariosPartida.pop();
console.log(ultimoHorario);
console.log(horariosPartida);

//✓ Verificar si el horario 14 está en la lista y agregarlo al final si no está
//presente: Usamos includes para verificar si 14 está en la lista y
//push para agregarlo si no está.
if (!horariosPartida.includes(14)) {
    horariosPartida.push(14);
};

console.log(horariosPartida);

//✓ Encontrar la posición del horario 18 y eliminarlo si está presente:
//Usamos indexOf para encontrar la posición de 18 y splice para
//eliminarlo si está presente.
if (horariosPartida.includes(18)){
    let pos = horariosPartida.indexOf(18);
    horariosPartida.splice(pos, 1);
};

console.log(horariosPartida);

//✓ Añadir el horario eliminado en el paso 2 al final de la nueva lista de
//horarios atrasados: Usamos push para agregar el ultimoHorario
//(adelantado una hora) al final de horariosAtrasados.
horariosAtrasados.push(ultimoHorario);
console.log(horariosAtrasados);

//✓ Mostrar la lista final de horarios atrasados: Mostramos la lista por consola.
console.log(horariosAtrasados);

//✓ Eliminar el primer elemento de la lista de horarios atrasados:
//Usamos shift para eliminar el primer elemento.
horariosAtrasados.shift();
console.log(horariosAtrasados);

//✓ Verificar si el horario 9 está en la lista y agregarlo al principio si no
//está presente: Usamos includes para verificar si 9 está en la lista y
//unshift para agregarlo si no está.
if (!horariosPartida.includes(9)){
    horariosPartida.unshift(9);
};

console.log(horariosPartida);

//✓ Por último, mostrar la lista final después de todas las operaciones

console.log("Horarios Partida: " + horariosPartida);
console.log("Horarios Atrasados: " + horariosAtrasados);


/*
Ejercicio 2: filter() “Alumnos”
Necesitamos enviarle un diploma a los alumnos que están aprobados y
un e-mail a los alumnos desaprobados para acordar un recuperatorio.
Por lo tanto, necesitamos dos listas: una lista que almacene todos los
aprobados y otra los desaprobados. Deberemos guardarlos en las
variables aprobados y desaprobados respectivamente.
Además de hacer esto, deberemos realizar las siguientes operaciones:
✓ Filtra los estudiantes en dos listas: aprobados y desaprobados.
✓ Manipula la lista de aprobados agregando un estudiante al inicio y
otro al final.
✓ Manipula la lista de desaprobados eliminando al primero y al último
estudiante.
✓ Utiliza map junto con indexOf para buscar un estudiante específico
en la lista de aprobados y muestra su índice si está presente.
✓ Utiliza includes para verificar si un estudiante está en la lista de
desaprobados y muestra un mensaje indicando su presencia.
✓ Muestra las listas de aprobados y desaprobados actualizadas
después de todas las operaciones.
*/

let estudiantes = [
                    {nombre: "John", promedio: 8.5, aprobado: true},
                    {nombre: "Jane", promedio: 7, aprobado: true},
                    {nombre: "June", promedio: 3, aprobado: false},
                    {nombre: "Jake", promedio: 4, aprobado: false},
                    {nombre: "Jill", promedio: 9, aprobado: true}
                ];

//Filtra los estudiantes en dos listas: aprobados y desaprobados.

let aprobados = estudiantes.filter(estudiante => estudiante.aprobado );
let desaprobados = estudiantes.filter(estudiante => !estudiante.aprobado );

console.log(aprobados);
console.log(desaprobados);

//✓ Manipula la lista de aprobados agregando un estudiante al inicio y otro al final.
//.unshift() agrega al principio
aprobados.unshift({nombre: "Ariadna", promedio: 9, aprobado: true});
//.push() agrega al final
aprobados.push({nombre: "Leon", promedio:10, aprobado: true});

console.log(aprobados);


//✓ Manipula la lista de desaprobados eliminando al primero y al último estudiante.
//.shift() elimina el primero
desaprobados.shift();
//.pop() elimina el último
desaprobados.pop();

console.log(desaprobados);


//✓ Utiliza map junto con indexOf para buscar un estudiante específico
//en la lista de aprobados y muestra su índice si está presente.

//creo un array con los nombres de los estudiantes, en el orden en que se encuentran en el array
let nombresEstudiantes = estudiantes.map(estudiante => estudiante.nombre);
console.log(nombresEstudiantes);
//busco en que índice está el nombre que busco
let indice = nombresEstudiantes.indexOf("June");
console.log("El estudiante June se encuentra en la posición " + (indice+1));


//✓ Utiliza includes para verificar si un estudiante está en la lista de
//desaprobados y muestra un mensaje indicando su presencia.
if (desaprobados.includes("Leon")){
    console.log("El estudiante se encuentra en la lista de alumnos desaprobados");
} else {
    console.log("El estudiante no se encuentra en la lista de alumnos desaprobados");
};


//✓ Muestra las listas de aprobados y desaprobados actualizadas después de todas las operaciones.
console.log("Lista actualizada de alumnos aprobados: " );
console.log(aprobados);
console.log("Lista actualizada de alumnos desaprobados: " );
console.log(desaprobados);



/*
• Ejercicio 3: reduce() “Maraton”
Nos dejaron un array con las vueltas que dio una corredora entrenando
en distintos momentos para una maratón.Nuestro desafío será crear la
variable totalVueltas y almacenar en ella el total, usando el método
reduce.
Además de hacer esto, deberemos realizar las siguientes operaciones:
✓ Añadir una vuelta al principio del array: Usamos unshift para
agregar la vuelta 7 al principio del array vueltas.
✓ Eliminar la última vuelta del array: Usamos pop para eliminar la
última vuelta del array y guardarla en la variable ultimaVuelta.
✓ Verificar si la vuelta 10 está en el array y agregarla al final si no está
presente: Usamos includes para verificar si la vuelta 10 está en el
array y push para agregarla al final si no está.
✓ Eliminar la primera vuelta del array: Usamos shift para eliminar la
primera vuelta del array y guardarla en la variable primeraVuelta.
✓ Verificar si la vuelta 15 está en el array y agregarla al principio si no
está presente: Usamos includes para verificar si la vuelta 15 está en
el array y unshift para agregarla al principio si no está.
✓ Calcular el nuevo total de vueltas usando reduce: Después de todas
las operaciones, recalculamos el total de vueltas utilizando reduce
*/

let vueltas = [5, 8, 12, 3, 22];

//crear la variable totalVueltas y almacenar en ella el total, usando el método reduce.
let totalVueltas = vueltas.reduce((acumulador, vuelta) => acumulador + vuelta, 0);
console.log("total de vueltas: " + totalVueltas);

//✓ Añadir una vuelta al principio del array: Usamos unshift para
//agregar la vuelta 7 al principio del array vueltas.
vueltas.unshift(7);
console.log(vueltas);

//✓ Eliminar la última vuelta del array: Usamos pop para eliminar la
//última vuelta del array y guardarla en la variable ultimaVuelta.
vueltas.pop();
console.log(vueltas);

//✓ Verificar si la vuelta 10 está en el array y agregarla al final si no está
//presente: Usamos includes para verificar si la vuelta 10 está en el
//array y push para agregarla al final si no está.
if (!vueltas.includes(10)){
    vueltas.push(10);
};

console.log(vueltas);

//✓ Eliminar la primera vuelta del array: Usamos shift para eliminar la
//primera vuelta del array y guardarla en la variable primeraVuelta.
vueltas.shift();
console.log(vueltas);

//✓ Verificar si la vuelta 15 está en el array y agregarla al principio si no
//está presente: Usamos includes para verificar si la vuelta 15 está en
//el array y unshift para agregarla al principio si no está.
if (!vueltas.includes(15)){
    vueltas.unshift(15);
};

console.log(vueltas);

//✓ Calcular el nuevo total de vueltas usando reduce: Después de todas
//las operaciones, recalculamos el total de vueltas utilizando reduce
totalVueltas = vueltas.reduce((acumulador, vuelta) => acumulador + vuelta);
console.log(totalVueltas);



/*
Ejercicio 4: forEach “Lista de supermercado”
Para este ejercicio, contamos con un array llamado listaDeSuperMercado
que contiene una lista de ítems para comprar.
Nuestro trabajo será mostrar cada ítem de esa lista por consola utilizando
un foreach.
Ademas, debemos realizar las siguientes operaciones:
✓ Agrega el artículo 'Papas' al final de la lista utilizando el método
push.
✓ Elimina el primer artículo de la lista utilizando el método shift.
✓ Utiliza el método forEach para recorrer el arreglo
listaDeSuperMercado y mostrar cada ítem por consola.
✓ Busca la posición del artículo 'Cereales' utilizando el método
lastIndexOf y muestra su posición en la lista (considerando que los
índices comienzan desde 1 en la lista mostrada al usuario), o indica
que no se encontró si no está presente.
*/

let listaDeSuperMercado = [
                            "Bife de chorizo",
                            "Coca Cola",
                            "Bananas",
                            "Lechuga",
                            "Chimichurri",
                            "Latas de tomate",
                            "Arvejas",
                            "Cereales",
                            "Pechuga de pollo",
                            "Leche"
                        ];

//mostrar cada ítem de esa lista por consola utilizando un foreach.
listaDeSuperMercado.forEach(elemento => console.log(elemento));

//✓ Agrega el artículo 'Papas' al final de la lista utilizando el método push.
listaDeSuperMercado.push("Papas");

//✓ Elimina el primer artículo de la lista utilizando el método shift.
listaDeSuperMercado.shift();

//✓ Utiliza el método forEach para recorrer el arreglo listaDeSuperMercado y mostrar cada ítem por consola.
listaDeSuperMercado.forEach(elemento => console.log(elemento));

//✓ Busca la posición del artículo 'Cereales' utilizando el método
//lastIndexOf y muestra su posición en la lista (considerando que los
//índices comienzan desde 1 en la lista mostrada al usuario), o indica
//que no se encontró si no está presente.
let pos = listaDeSuperMercado.lastIndexOf("Cereales");

if (pos !== -1){
    console.log("La posición de los cereles en la lista es: " + (pos+1));
} else {
    console.log("No se encontró el articulo");
};

