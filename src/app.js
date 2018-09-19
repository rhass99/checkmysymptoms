require('dotenv').config({ silent: process.env.NODE_ENV === 'production' });

import http from 'http';

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(process.env.PORT, '127.0.0.1');

console.log(`Server running at http://127.0.0.1:${process.env.PORT}/`);