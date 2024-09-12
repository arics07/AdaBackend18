const net = require('net');
const readline = require('readline');

const PORT = 10000;

let conexiones = [];

//creo el servidor
const server = net.createServer((socket) => {
    console.log("El cliente se ha conectado desde " + socket.remoteAddress + ":" + socket.remotePort);

    conexiones.push({
        adress: socket.remoteAddress,
        port: socket.remotePort,
    });

    //Envía un mensaje inicial 
    socket.write("Bienvenidos al servidor TCP. Envia 'status' para verificar el estado.");


    //Maneja datos recibidos del cliente
    socket.on('data', (data) => {
        const message = data.toString().trim();
        console.log(`Mensaje recibido del cliente: ${message} \n`);    

        //Responer al cliente segpun el comando
        if (message === 'status'){
            socket.write('El servidor está en funcionamiento');
        } else {
            socket.write(`Servidor recibió: ${message}`);
        };
    });
    
    //Manejar el cierre de la conexxión
    socket.on('end', () => {
        console.log("Cliente desconectado: " + socket.remoteAddress + ":" + socket.remotePort);
        console.log("Las conexiones hasta el momento son: " + conexiones);
    });
    
    //Manejar errores
    socket.on('error', (err) => {
        console.log(`Error en el socket: ${err} \n`);
    });

    //Enviar mensajes desde el servidor
    sendMessageFromServer(socket);
});

//Manejar errores del servidor
server.on('err', (err) => {
    console.log(`Error en el servidor: ${err} \n`)
})

//Iniciar el servidor
server.listen(PORT, () => {
    console.log("Escuchando desde el puerto " + server.address().port);
});

//Función para enviar mensajes desde el servidor
function sendMessageFromServer(socket) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.setPrompt("Mensaje para el cliente: ");
    rl.prompt();

    rl.on('line', (input) => {
        if (input.toLowerCase() === 'exit'){
            console.log('Servidor cerrado \n');
            rl.close();
            socket.end();
        } else {
            socket.write(input + '\n');
            relative.prompt();
        };
    });
};

server.on('connection', (socket) => {
    console.log("Nuevo cliente conectado: " + socket.remoteAddress + ":" + socket.remotePort);  
});

