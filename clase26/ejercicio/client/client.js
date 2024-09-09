//npm install readline-sync
//en la carpeta donde está el archivo cliente

//importo el módulo NET
const net = require('net');

const readline = require('readline-sync');

//creo una conexión
const client = net.createConnection({port: 5000, host: 'localhost'});


//cuando escribo client.on('') me aparecen entre las '' los posibles eventos
//en este caso el evento es 'connect'
client.on('connect', () => {
    console.log("Conectado al servidor.");    
    client.write("Hola servidor!");
    //sendMessage();
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

//esta función va a mandar los mensajes al revidor
function sendMessage() {
    const message = readline.question('\nIngrese un mensaje para enviar al servidor. Ingrese exit para salir: \t');
    if (message.toLowerCase() == 'exit') {
        console.log("Cliente desconectado");
        client.end();
    } else {
        client.write(message);
    };
};
