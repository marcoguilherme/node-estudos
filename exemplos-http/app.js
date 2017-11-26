//Exemplo sem rotas porem definindo porta e host

const http = require('http');

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    res.end("Hello World");
});

server.listen(port, hostname, () =>{
    console.log(`Servidor rodando corretamente. http://${hostname}:${port}`);
});