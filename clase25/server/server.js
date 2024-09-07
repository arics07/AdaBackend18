//importo el módulo NET
const net = require('net');

const server = net.createServer();

server.on('connection', (socket) => {
    socket.on('data', (data) => {
        console.log('\nEl cliente' + socket.remoteAddress + ': ' + socket.remotePort + ' dice ' + data);
        //rta al cliente confirmando la recepción de los datos data
        socket.write('Mensaje recibido');
    });

    server.on('close', () => {
        console.log('Comunicación finalizada');
    });

    server.on('error', (err) => {
        console.log(err.message);
    })
});

//desde donde escucha el servidor
server.listen(5000, () => {
    console.log('Servidor está escuchando en el puerto ' , server.address().port);
});


