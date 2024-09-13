const net = require('net');
const path = require('path');

const PORT = 8081;

//creo el servidor
const server = net.createServer((socket) => {
    console.log("El cliente se ha conectado desde " + socket.remoteAddress + ":" + socket.remotePort);

    socket.on('data', (data) => {
        console.log("Mensaje del cliente: ", socket.remoteAddress + ":" , socket.remotePort , " es: " + data.toString());
        const rutaNormalizada = path.normalize(data.toString());
        console.log("La ruta normalizada es: " + rutaNormalizada + '\n');
        socket.write("La ruta normalizada es: " + rutaNormalizada + '\n');
    });
    
    socket.on('close', () => {
        console.log("Cliente desconectado: " + socket.remoteAddress + ":" + socket.remotePort);
    });
    
    socket.on('error', (err) => {
        console.log("Error: " + err.message);
    });

});


server.listen(PORT, () => {
    console.log("Escuchando desde el puerto " + server.address().port);
});