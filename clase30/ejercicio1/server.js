const net = require('net');
const path = require('path');

const PORT = 8080;

//creo el servidor
const server = net.createServer((socket) => {
    console.log("El cliente se ha conectado desde " + socket.remoteAddress + ":" + socket.remotePort);

    socket.on('data', (data) => {
        console.log("Mensaje del cliente: ", socket.remoteAddress + ":" , socket.remotePort , " es: " + data.toString());
        const pathIsAbsolute = path.isAbsolute(data.toString());
        if (pathIsAbsolute){
            console.log("La ruta ingresada es absoluta: ", data.toString());
            socket.write("Ruta absoluta recibida: " + data.toString() + '\n');
        } else {
            console.log("La ruta ingresada es relativa: ", data.toString());
            socket.write("Ruta relativa recibida: " + data.toString() + '\n');
        }
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