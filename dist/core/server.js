'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _middleware = require('./middleware');

var _middleware2 = _interopRequireDefault(_middleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Declare an app from express
const app = (0, _express2.default)();
// Declare express router
const apiRouter = _express2.default.Router();
// Setup middleware
(0, _middleware2.default)(app);

exports.default = app;
//# sourceMappingURL=server.js.map