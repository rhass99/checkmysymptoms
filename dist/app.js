'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _server = require('./core/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.env.NODE_ENV === 'development') require('dotenv').config();

const PORT = process.env.PORT || 4000;

const server = (0, _http.createServer)(_server2.default);
server.listen(PORT, '0.0.0.0');
//# sourceMappingURL=app.js.map