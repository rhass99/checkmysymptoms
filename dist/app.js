'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.env.NODE_ENV === 'dev') require('dotenv').config();

const PORT = process.env.PORT || 4000;

(0, _express2.default)().get('/', (req, res) => res.send(`Listening to ${process.env.NODE_ENV} on port: ${PORT}`)).listen(PORT, '0.0.0.0');
//# sourceMappingURL=app.js.map