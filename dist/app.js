'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config({ silent: process.env.NODE_ENV === 'production' });

_http2.default.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(process.env.PORT, '127.0.0.1');

console.log('Server running at http://127.0.0.1:' + process.env.PORT + '/');
//# sourceMappingURL=app.js.map