'use strict';
if (process.env.NODE_ENV === 'dev') require('dotenv').config();

import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
const basename = path.basename(__filename);
const port = process.env.PORT;

const env = process.env.NODE_ENV || 'development';
const database = process.env.DATABASE_DEV || process.env.DATABASE;
const database_user = process.env.USER_DEV || process.env.USER;
const database_pass = process.env.PASSWORD_DEV || process.env.PASSWORD;
const database_host = process.env.HOST_DEV || process.env.HOST;

const db = {};

const sequelize = new Sequelize(database, database_user, database_pass, {host: database_host, dialect: 'postgres', pool: {max: 5, min: 0, idle: 10000}});

const asyncSequelize = async () => {
    try {
        sequelize.authenticate();
        console.log(`Connection Established for ${env} on port: ${port}`);
    } catch (err) {
        console.error('Unable to connect', err);
    }
};

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

module.exports = { db, asyncSequelize}
