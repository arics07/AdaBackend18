const net = require('net');

//creo el servidor
const server = net.createServer((socket) => {
    console.log("El cliente se ha conectado desde " + socket.remoteAddress + ":" + socket.remotePort);

    socket.setTimeout(10000);

    socket.on('timeout', ()=>{
        console.log('Tiempo de espera finalizado');
        socket.end();      
    });

    socket.on('data', () => {
        socket.write("Mensaje recibido");
    });
    
    socket.on('close', () => {
        console.log("Cliente desconectado: " + socket.remoteAddress + ":" + socket.remotePort);
    });
    
    socket.on('error', (err) => {
        console.log("Error: " + err.message);
    });

});



server.listen(7000, () => {
    console.log("Escuchando desde el puerto " + server.address().port);
});

server.on('connection', (socket) => {
    console.log("Nuevo cliente conectado: " + socket.remoteAddress + ":" + socket.remotePort);
});