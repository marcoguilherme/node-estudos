//Exemplo adicionando rotas

const http = require("http");

const hostname = "localhost";
const port = "3000";

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"})
    if(req.url == "/"){
        res.write("<h1>Homepage</h1>");
    }else if(req.ur == "/benvindo"){
        res.write("<h1>Bem Vindo</h1>");
    }else{
        res.write("<h1>Pagina nao encontrada</h1>");
    }
});

server.listen(port, hostname,  () => {
    console.log("Servidor rodando corretamente");
})

