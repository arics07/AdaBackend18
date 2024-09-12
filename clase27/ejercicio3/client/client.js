const net = require('net');
const readline = require('readline');

const PORT = 10000;
const HOST = '127.0.0.1';

//Crear interfaz de entrada para el cliente
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//Crear el cliente
const client = new net.Socket();

//Conectar con el servidor
client.connect(PORT, HOST, () => {
    console.log('Conectando al servidor \n');
    promptUser();
});

//Manejar los datos
client.on('data', (data) => {
    console.log(`Respuesta del servidor: ${data.toString().trim()} \n`);
    promptUser();
});


//Manejar evento de cierre
rl.on('close', () => {
    console.log('Conexión cerrada.');
    process.exit(0);
});

//Función para solicitar los datos
function promptUser(){
    rl.question('Ingrese un mensaje para el servidor (o exit para salir): ', (message) => {
        if (message.toLowerCase() === 'exit'){
            console.log('El cliente se desconectó.');
            rl.close();
        } else {
            client.write(message + '\n');
        }
    });
};
