import express from 'express';
import setupMiddleware from './middleware';
import sequelize from './db'

// Declare an app from express
const app = express();

// Declare express router
const apiRouter = express.Router();

// Start DB
sequelize.authenticate().then(() => {console.log('Connection has been established.');
}).catch(err => {console.error('Unable to connect to database: ', err);});

// Setup middleware
setupMiddleware(app);


app.get('/', (req, res) => res.send(`Listening to ${process.env.NODE_ENV} on port: ${PORT}`));

app.post('/lions', (req, res, next) => {
    console.log(req.body)
    let myLion = req.body;
    myLion.id = "1";
    db.push(myLion);
    res.json(db);
});

export default app