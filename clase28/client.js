const { log } = require('console');
const net = require('net');
const { argv } = require('process');
const readline = require('readline');

//Configuración conexión
const OPTIONS = {
    port: 7200,
    host: '127.0.0.1'
};

// Crear la conexión TCP al servidor
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//Obtengo el nombre del usuario desde los argumentos de la línea de comandos
const UserName = process.argv[2].split('=')[1] || 'Unknown';

//Función para mejorar la entrada del usuario
const handleInput = () => {
    rl.question('Client -> ', (clientMsg) => {
        //Le manda mensaje al servior
        clientTCP.write(clientMsg);
        handleInput();
    });
};

//Manejar la conexión del cliente
clientTCP.on('connect', () => {
    console.log('Conexión exitosa con el servidor');
    handleInput();
});

//Manejar la data
clientTCP.on('data', (serverData) => {
    const serverMsg = serverData.toString();
    console.log('Server -> ', serverMsg);
});

//Manejar la desconexión
clientTCP.on('end', () => {
    console.log('El servidor ha cerrado la conexión.');
    rl.close();
});

//Manejar el error
clientTCP.on('error', (err) => {
    console.log('Error de conexión ', err);
    rl.close();
});