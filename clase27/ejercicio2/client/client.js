//npm install readline-sync
//en la carpeta donde está el archivo cliente

//importo el módulo NET
const net = require('net');

const readline = require('readline-sync');

//creo una conexión
const client = net.createConnection({port: 9000, host: 'localhost'});

client.on('connect', () => {
    console.log("Conectado al servidor.");    
    client.write("Hola servidor!");
    sendMessage();
    client.end();
});

client.on('data', (data) => {
    console.log('El servidor dice: ' + data.toString());
});

client.on('error', (err) => {
    console.log("Error: " + err.message);
});

client.on('end', () => {
    console.log("Desconectado del servidor");
});

//esta función va a mandar los mensajes al servidor
function sendMessage() {
    const message = readline.question('\nIngrese un mensaje para enviar al servidor: \t');
};