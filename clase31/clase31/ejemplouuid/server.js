const net = require('net');
const {v1: uuid1, v3: uuid3, v4: uuid4, v5: uuid5} = require('uuid');

const NAMESPACE = uuid3.URL;
const PORT = 8080;

const server = net.createServer((socket) => {
    const idV1 = uuid1();
    const idV3 = uuid3("usuario", NAMESPACE);
    const idV4 = uuid4();
    const idV5 = uuid5("usuario", NAMESPACE);

    console.log("Conexión establecida: \n");
    console.log("UUID v1: ", idV1);
    console.log("UUID v3: ", idV3);
    console.log("UUID v4: ", idV4);
    console.log("UUID v5: ", idV5);

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
