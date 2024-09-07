const net = require('net');
const readline = require('readline-sync');

const options = {
    port: 5000,
    host: '127.0.0.1',
};


const client = net.createConnection(options);

client.on('connect', () => {
    console.log('Conexión satisfactoria');
    sendLine();
});

//otro evennto
client.on('data', (data) => {
    console.log('El servidor dice: ' + data);
    sendLine();
});


client.on('error', (err) => {
    console.log(err.message);
});


function sendLine() {
    var line = readline.question('\nDigite alguna cosa \t');
    if (line == "0"){
        console.log("Cliente Desconectado")
        client.end(); //cierra la conexión si el usuario ingresa 0
    } else {
        client.write(line);
    };
};
