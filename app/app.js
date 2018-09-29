'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _server = require('./core/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Importing dotenv to be used only in development
// Heroku has NODE_ENV = 'production' so will not require dotenv
if (process.env.NODE_ENV === 'development') require('dotenv').config();

// Import http, createServer and express app from the server file

const PORT = process.env.PORT || 4000;

// Create the server and run app.
const server = (0, _http.createServer)(_server2.default);
server.listen(PORT, '0.0.0.0');
//# sourceMappingURL=app.js.map