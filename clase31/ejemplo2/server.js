const http = require('http');
const fs = require('fs');

PORT = 3000;

const server = http.createServer((req, res) => {
    fs.readFile('datos.json', 'utf-8', (err, data) => {
        if (err) {
            res.end("No se pudo leer el archivo JSON.");
            return;
        };

        res.setHeader("Conent-type", "application/json");
        res.end(data);

    });
});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en https://localhost:${PORT}`);
});

//res el el objeto que se utilixa para enviarle datos al cliente