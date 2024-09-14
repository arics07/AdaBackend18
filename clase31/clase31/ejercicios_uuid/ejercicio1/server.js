/*
Ejercicio 1: Servidor TCP con UUID v4

Objetivo:
Crear un servidor TCP que asigne un UUID v4 único a cada conexión y envíe el UUID de vuelta al cliente.

Pasos:
1. Servidor TCP (server.js):
o Importar los módulos net y uuid.
o Crear un servidor TCP que genere un UUID v4 para cada conexión y envíe el UUID al cliente.

2. Cliente TCP (client.js):
o Importar el módulo net.
o Conectar al servidor TCP, recibir el UUID y mostrarlo en la consola.
*/

const net = require('net');

//npm install uuid
const {v4: uuid4} = require('uuid');


const PORT = 7000;

//creo el servidor
const server = net.createServer((socket) => {
    console.log("El cliente se ha conectado desde " + socket.remoteAddress + ":" + socket.remotePort);

    //genero el UUID v4 y lo envío al cliente
    const idV4 = uuid4();
    console.log("UUID v4: " + idV4);
    socket.write("El UUID v4 es: " + idV4 + "\n");

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
