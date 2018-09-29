'use strict';

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

const basename = _path2.default.basename(__filename);
const DB_URI = process.env.DATABASE_DEV_URL || process.env.DATABASE_URL;
//const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/config.json');
console.log(config);
const db = {};

let sequelize = new _sequelize2.default(DB_URI, {
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  sync: true,
  forceSync: false
});

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

exports.default = db;
//# sourceMappingURL=index.js.map