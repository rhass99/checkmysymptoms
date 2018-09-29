'use strict';
//const env = process.env.NODE_ENV || 'development';

// Load dotenv environment variable DATABASE_DEV_URL and PORT 3000

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.env.NODE_ENV === 'development') require('dotenv').config();

// Import filesystem to recognize where the models are


// Import sequelize module


// Set up the internals of sequelize
const basename = _path2.default.basename(__filename);
const DB_URI = process.env.DATABASE_DEV_URL;
const config = require(__dirname + '/../config/config.json');
const db = {};

// Check if the application is running in development or running on heroku
// On Heroku I called staging as production, to fully mimic it
if (process.env.DATABASE_URL) {
    // the application is executed on Heroku ... use the postgres staging or production database
    // DATABASE_URL
    var sequelize = new _sequelize2.default(process.env.DATABASE_URL, {
        dialect: 'postgres',
        protocol: 'postgres',
        logging: true //false -- Check Logging and Sync options???
    });
} else {
    // the application is executed on the local machine ... use postgres development
    // DATABASE_DEV_URL
    sequelize = new _sequelize2.default(DB_URI, {
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        sync: true,
        forceSync: false
    });
}

// Export the model object that is the exact similar to db object
// Import this in the server.js file to run queries on the db based on models
// Use the model object to create new rows in the database
_fs2.default.readdirSync(__dirname).filter(file => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(file => {
    const model = sequelize['import'](_path2.default.join(__dirname, file));
    db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = _sequelize2.default;

// Export the database object
// Use to Authenticate db in the server.js file, while use model to query db
exports.default = db;
//# sourceMappingURL=index.js.map