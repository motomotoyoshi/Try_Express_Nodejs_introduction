var http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {'COntent-Type': 'text/plane'});
    response.end('Hello World\n');
}).listen(3000);

console.log('Server running at localhost:3000');