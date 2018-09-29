'use strict';
if (process.env.NODE_ENV === 'development') require('dotenv').config();
//const env = process.env.NODE_ENV || 'development';

import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

const basename = path.basename(__filename);
const DB_URI = process.env.DATABASE_DEV_URL;

const config = require(__dirname + '/../config/config.json');
//console.log(config);
const db = {};


if (process.env.DATABASE_URL) {
    // the application is executed on Heroku ... use the postgres database
    var sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect:  'postgres',
        protocol: 'postgres',
        logging:  true //false
    })
} else {
    // the application is executed on the local machine ... use mysql
        sequelize = new Sequelize(DB_URI, {
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


fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;