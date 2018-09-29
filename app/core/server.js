'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _middleware = require('./middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _index = require('../models/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.env.NODE_ENV === 'development') require('dotenv').config();

// Import express, middleware, routes, db and model.
// Need to add logging ??


// Declare express app
const app = (0, _express2.default)();
// Declare express router
const apiRouter = _express2.default.Router();
// Declare express body-parser middleware
(0, _middleware2.default)(app);

// Remove this later once connection is finalized
const PORT = process.env.PORT;
const DB_URI = process.env.DATABASE_DEV_URL || process.env.DATABASE_URL;
// Start DB - Remove DB_URI reference
_index2.default.sequelize.authenticate().then(() => console.log(`Connected to ${DB_URI}`)).catch(() => console.log('Not connected'));

// Start the application routes
// Move routing implementation into routes folder
app.get('/checkconnection', (req, res) => res.send(`Listening to ${process.env.NODE_ENV} on port: ${PORT} while Connected to ${DB_URI}`));

app.get('/user', (req, res) => {
    let email = req.param('email');
    console.log(email);
    _index2.default.User.findOne({ where: { email: email } }).then(user => res.json(user)).catch(err => console.log(err));
});

// Export the declared Express app
exports.default = app;
//# sourceMappingURL=server.js.map