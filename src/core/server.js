if (process.env.NODE_ENV === 'development') require('dotenv').config();

import express from 'express';
import setupMiddleware from './middleware';
import db from '../models/index'
import model from '../models/index';
const DB_URI = process.env.DATABASE_DEV_URL || process.env.DATABASE_URL;
const PORT = process.env.PORT;

// Declare an app from express
const app = express();

// Start DB
db.sequelize.authenticate()
    .then(() => console.log(`Connected to ${DB_URI}`))
    .catch(() => console.log('Not connected'));

console.log(model);

// Declare express router
const apiRouter = express.Router();

// Setup middleware
setupMiddleware(app);

app.get('/checkconnection', (req, res) => res.send(`Listening to ${process.env.NODE_ENV} on port: ${PORT} while Connected to ${DB_URI}`));

app.get('/user', (req, res) => {
    let email = req.param('email');
    console.log(email);
    model.User.findOne({ where: {email: email}})
        .then((user) => res.json(user))
        .catch((err) => console.log(err));
});

app.post('/lions', (req, res, next) => {
    console.log(req.body);
    let myLion = req.body;
    myLion.id = "1";
    db.push(myLion);
    res.json(db);
});

export default app;