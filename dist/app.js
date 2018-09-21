'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.env.NODE_ENV == 'dev') require('dotenv').config();

var PORT = process.env.Port || 5000;

(0, _express2.default)().get('/', function (req, res) {
  return res.send(process.env.MY_NAME);
}).listen(PORT, function () {
  return console.log('Listening to ' + process.env.MY_NAME + ' on port: ' + PORT);
}, '127.0.0.1');
//# sourceMappingURL=app.js.map