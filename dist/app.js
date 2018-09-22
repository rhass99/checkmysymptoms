'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.env.NODE_ENV === 'dev') require('dotenv').config();

var PORT = process.env.PORT || 5000;

(0, _express2.default)().get('/', function (req, res) {
  return res.send('Listening to ' + process.env.NODE_ENV + ' on port: ' + PORT);
}).listen(PORT, '0.0.0.0');
//# sourceMappingURL=app.js.map