const net = require('net');
const path = require('path');

const PORT = 8082;

//creo el servidor
const server = net.createServer((socket) => {
    console.log("El cliente se ha conectado desde " + socket.remoteAddress + ":" + socket.remotePort);

    socket.on('data', (data) => {
        console.log("Mensaje del cliente: ", socket.remoteAddress + ":" , socket.remotePort , " es: " + data.toString());
        const directorio = path.dirname(data.toString());
        const nombreBase = path.basename(data.toString());
        const extensionArchivo = path.extname(data.toString());
        console.log("El directorio del archivo es: " + directorio + ", el nombre del archivo es: " + nombreBase + " y la extensión del archivo es: " + extensionArchivo + "\n");
        socket.write("El directorio del archivo es: " + directorio + ", el nombre del archivo es: " + nombreBase + " y la extensión del archivo es: " + extensionArchivo + "\n");
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