/*
Ejercicio 3: Servidor TCP con UUID v1 y JSON

Objetivo:
Crear un servidor TCP que responda con un objeto JSON que contenga
un UUID v1 basado en el tiempo y la dirección MAC.

Pasos:

1. Servidor TCP (server.js):
o Importar los módulos net y uuid.
o Crear un servidor TCP que genere un UUID v1 basado en el tiempo.
o Enviar un objeto JSON con el UUID al cliente.

2. Cliente TCP (client.js):
o Importar el módulo net.
o Conectar al servidor TCP, recibir el objeto JSON, parsearlo y mostrar el UUID en la consola.
*/

const net = require('net');
const readline = require('readline');

//creo una conexión
const client = net.createConnection({port: 7000, host: 'localhost'});

client.on('connect', () => {
    console.log("Conectado al servidor.");    
});

client.on('data', (data) => {
    console.log('El servidor dice: ' + data.toString());
    sendMessage();
});

client.on('error', (err) => {
    console.log("Error: " + err.message);
});

client.on('end', () => {
    console.log("Desconectado del servidor");
});

// crear una interfaz de readline para la entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//esta función va a mandar los mensajes al revidor
function sendMessage() {
    rl.question('\nIngrese un mensaje para enviar al servidor. Ingrese exit para salir: \t', (message) => {
        if (message.toLowerCase() == 'exit') {
            console.log("Cliente desconectado");
            client.end();
            rl.close();
        } else {
            client.write(message);
        };
    });
    
};
