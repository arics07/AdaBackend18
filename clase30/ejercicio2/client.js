const net = require('net');
const { stdin, stdout } = require('process');
const readline = require('readline');

//creo una conexión
const client = net.createConnection({port: 8081, host: 'localhost'});

client.on('connect', () => {
    console.log("Conectado al servidor.");    
    client.write("Hola servidor!");
});

//otro evento: 'data'
client.on('data', (data) => {
    console.log('El servidor dice: ' + data.toString());
    sendMessage();
});

client.on('error', (err) => {
    console.log("Error: " + err.message);
});

client.on('end', () => {
    console.log("Desconectado del servidor");
});

const rl = readline.createInterface({
    input: stdin,
    output: stdout,
});

//esta función va a mandar los mensajes al servidor
function sendMessage() {
    const message = rl.question('\nIngrese un mensaje para enviar al servidor. Ingrese exit para salir: \t', (mssg) => {
        if (mssg.toLowerCase() === 'exit') {
            console.log("Cliente desconectado");
            client.end();
            rl.close();
        } else {
            client.write(mssg);
            sendMessage();
        };
    });
    
};
