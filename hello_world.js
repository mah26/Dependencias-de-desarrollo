const http = require('http');

const hostname = '127.0.0.1'; //Conexión local
const port = 3000; //Puerta de salida

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World :)');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
