const net = require('net');

//creo el servidor
const server = net.createServer((socket) => {
    console.log("El cliente se ha conectado desde " + socket.remoteAddress + ":" + socket.remotePort);

    socket.on('data', (data) => {
        console.log("Mensaje del cliente: " + socket.remoteAddress + ":" + socket.remotePort + " es " + data);
        socket.write(data);
    });
    
    socket.on('close', () => {
        console.log("Cliente desconectado: " + socket.remoteAddress + ":" + socket.remotePort);
    });
    
    socket.on('error', (err) => {
        console.log("Error: " + err.message);
    });

});


server.listen(5000, () => {
    console.log("Escuchando desde el puerto " + server.address().port);
});

// ctrl + c
//para cerra el servidor