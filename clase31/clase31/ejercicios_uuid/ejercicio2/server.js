/*
Ejercicio 2: Servidor TCP con UUID v5 y JSON

Objetivo:
Crear un servidor TCP que responda con un objeto JSON que contenga
un UUID v5 basado en un nombre fijo y un espacio de nombres.

Pasos:

1. Servidor TCP (server.js):
o Importar los módulos net y uuid.
o Crear un servidor TCP que genere un UUID v5 basado en un nombre y un espacio de nombres.
o Enviar un objeto JSON con el UUID al cliente.

2. Cliente TCP (client.js):
o Importar el módulo net.
o Conectar al servidor TCP, recibir el objeto JSON, parsearlo y mostrar el UUID en la consola.
*/

const net = require('net');

//npm install uuid
const {v5: uuid5} = require('uuid');


const PORT = 7000;

//creo el servidor
const server = net.createServer((socket) => {
    console.log("El cliente se ha conectado desde " + socket.remoteAddress + ":" + socket.remotePort);

    //genero el UUID v5 y lo envío al cliente
    const NAMESPACE = uuid5.URL; // Se usa url como espacio de nombres
    const nameV5 = "chicasBack";
    const idV5 = uuid5(nameV5, NAMESPACE);
    console.log("UUID v5: " + idV5);

    // Crear un objeto JSON con el UUID y enviarlo al cliente
    const response = JSON.stringify({ uuid: idV5 });
    socket.write(response + "\n");

    socket.on('data', (data) => {
        console.log("Mensaje del cliente: ", socket.remoteAddress + ":" , socket.remotePort , " es: " + data.toString());
        // Enviar de vuelta el mensaje recibido para confirmar que llegó
        socket.write("Recibido: " + data.toString());
    });
    
    socket.on('close', () => {
        console.log("Cliente desconectado: " + socket.remoteAddress + ":" + socket.remotePort);
    });
    
    socket.on('error', (err) => {
        console.log("Error: " + err.message);
    });

});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
