let mascotas = [
                {id: 1, nombre: 'Leon', especie: 'gato', edad: 2, disponible: false}, 
                {id: 2, nombre: 'Negro', especie: 'perro', edad: 15, disponible: false},
                {id: 3, nombre: 'Beto', especie: 'gato', edad: 7, disponible: true},
                {id: 4, nombre: 'Mora', especie: 'gato', edad: 1, disponible: true},
                {id: 5, nombre: 'Brownie', especie: 'perro', edad: 4, disponible: true},
                {id: 6, nombre: 'Raquel', especie: 'gato', edad: 2, disponible: false},
                {id: 7, nombre: 'Pipi', especie: 'gato', edad: 3, disponible: true},
                {id: 8, nombre: 'Chocho', especie: 'perro', edad: 9, disponible: true},
                {id: 9, nombre: 'Pedro', especie: 'gato', edad: 2, disponible: false}
            ];

let propietarios = [
                {id: 1, nombre: 'Ricardo Gonzalez', email: 'rgonzalez@gmail.com', mascotasAdoptadas: [2]},
                {id: 2, nombre: 'Marisa Martinez', email: 'mm@hotmail.com', mascotasAdoptadas: [1]},
                {id: 3, nombre: 'Ana Rossi', email: 'anitarossi@gmail.com', mascotasAdoptadas: [6, 9]}
            ];



//Funciones de Gestión de Mascotas

//Implementar una función agregarMascota(id, nombre, especie, edad) que agregue una nueva mascota al array mascotas.
function agregarMascota(nombre, especie, edad) {
 
    let nuevaMascota = {
                    id: mascotas.length+1,
                    nombre: nombre,
                    tipo: especie,
                    edad: edad,
                    disponible: true
                };
         
    mascotas.push(nuevaMascota);
    console.log(mascotas);
};

//Crear una función buscarMascota(criterio, valor) que permita buscar mascotas por nombre o especie.
function buscarMascota(criterio, valor){
    let encontrados = [];
    
    if (criterio === 'nombre') {
        for (let i=0; i<mascotas.length; i++) {
            if (mascotas[i].nombre === valor) {
                encontrados.push(mascotas[i])
            };
        }
    } else if (criterio === 'especie') {
        for (let i=0; i<mascotas.length; i++) {
            if (mascotas[i].especie === valor) {
                encontrados.push(mascotas[i])
            };
        }
    };
    
    console.log(encontrados);
    return encontrados;
};


//Gestión de Propietarios

//Implementar una función registrarPropietario(nombre, email) que agregue un nuevo propietario al array propietarios.
function registrarPropietario(nombre, email) {
    let nuevoPropietario = {id: propietarios.length+1 , nombre: nombre, email: email, mascotasAdoptadas: []};
    propietarios.push(nuevoPropietario);
    console.log(propietarios);
};


//Crear una función buscarPropietario(email) que devuelva la información de un propietario dado su email.
function buscarPropietario(email) {    
    let propietarioBuscado = propietarios.filter((propietario) => propietario.email == email)
    console.log(propietarios);
    return propietarioBuscado;
};


//Sistema de Adopciones

//Desarrollar una función adoptarMascota(idMascota, idPropietario) que marque una mascota como no disponible y 
//la agregue a la lista de mascotas adoptadas del propietario.
function adoptarMascota(idMascota, idPropietario) {

    if (mascotas[idMascota-1].disponible === false){
        console.log("La mascota no está en adopción");

    } else {

        mascotas[idMascota-1].disponible = false;
        propietarios[idPropietario-1].mascotasAdoptadas.push(mascotas[idMascota-1].id);
    }

}

//Implementar una función devolverMascota(idMascota, idPropietario) 
//que marque una mascota como disponible y la elimine de la lista de mascotas adoptadas del propietario.
//si el indice del propietario no existe se rompe
function devolverMascota(idMascota, idPropietario) {

    if ((mascotas.includes(mascotas[idMascota-1])) && (propietarios.includes(propietarios[idPropietario-1]))){

        mascotas[idMascota-1].disponible = true;
        let indice = propietarios[idPropietario-1].mascotasAdoptadas.indexOf(idMascota);

        if (indice !== -1){
            propietarios[idPropietario-1].mascotasAdoptadas.splice(indice);
            console.log("Se eliminó la mascota del registro del propietario.");
            console.log(propietarios[idPropietario-1].mascotasAdoptadas);
        } else {
            console.log("Esa persona no tiene esa mascota");
        }
        
    } else {

        console.log("la mascota o el propietario NO existe");

    }
   
}


//Interfaz de Usuario por Consola

//Implementar una función menuPrincipal() 
//que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().

const prompt = require("prompt-sync")({ sigint: true });

function menuPrincipal(){

    console.log("BIENVENIDO AL SISTEMA DE GESTIÓN DE ADOPCIONES");
    console.log("-----------------------------------------------");
    console.log("1. AGREGAR UNA MASCOTA");
    console.log("2. BUSCAR UNA MASCOTA");
    console.log("3. REGISTRAR PROPIETARIO");
    console.log("4. BUSCAR PROPIETARIO");
    console.log("5. ADOPTAR UNA MASCOTA");
    console.log("6. DEVOLVER UNA MASCOTA");

    let opcion = parseInt(prompt("Ingrese el número de la opción que desea ejecutar"));

    switch(opcion){
        case 1:
            let nombre = prompt("Ingrese el nombre de la mascota: ");
            let especie = prompt("Ingrese la especie de la mascota: ");
            let edad= parseInt(prompt("Ingrese la edad de la mascota: "));
            agregarMascota(nombre, especie, edad);
            console.log(mascotas);
            break;
        case 2:
            console.log("1. Buscar por nombre: ");
            console.log("2. Buscar por especie: ");
            let opc = parseInt(prompt("Ingrese la opción del criterio para buscar la mascota: "));
            if (opc === 1) {
                let nombr = prompt("Ingrese el nombre de la mascota: ");
                buscarMascota("nombre", nombr);
            } else if (opc ===2) {
                let esp = prompt("Ingrese la especie de la mascota: ");
                buscarMascota("especie", esp);
            } else {
                console.log("La opción no es correcta");
            };
            break;
        case 3:
            let nombrePropietario = prompt("Ingrese el nombre del propietario: ");
            let mailPropietario = prompt("Ingrese el mail del propietario: ");
            registrarPropietario(nombrePropietario, mailPropietario);
            break;
        case 4:
            let mailProp = prompt("Ingrese el mail del propietario que busca: ");
            buscarPropietario(mailProp);
            break;
        case 5:
            let idProp = parseInt(prompt("Ingrese el id del propietario: "));
            let idMasc = parseInt(prompt("Ingrese el id de la mascota: "));
            adoptarMascota(idMasc, idProp);
            break;
        case 6:
            let idPropiet = parseInt(prompt("Ingrese el id del propietario: "));
            let idMascot = parseInt(prompt("Ingrese el id de la mascota: "));
            devolverMascota(idMascot, idPropiet);
            break;
        default:
            console.log("La opción ingresada no es correcta.");
            break
    }

}

menuPrincipal();

