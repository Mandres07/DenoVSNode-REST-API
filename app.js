const http = require('http');

const server = http.createServer((req, res) => {
   res.end('HolaMundo');
});

server.listen(3000);