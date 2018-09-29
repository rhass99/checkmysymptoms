if (process.env.NODE_ENV === 'development') require('dotenv').config();

// Import express, middleware, routes, db and model.
// Need to add logging ??
import express from 'express';
import setupMiddleware from './middleware';
import db from '../models/index'
import model from '../models/index';


// Declare express app
const app = express();
// Declare express router
const apiRouter = express.Router();
// Declare express body-parser middleware
setupMiddleware(app);


// Remove this later once connection is finalized
const PORT = process.env.PORT;
const DB_URI = process.env.DATABASE_DEV_URL || process.env.DATABASE_URL;
// Start DB - Remove DB_URI reference
db.sequelize.authenticate()
    .then(() => console.log(`Connected to ${DB_URI}`))
    .catch(() => console.log('Not connected'));


// Start the application routes
// Move routing implementation into routes folder
app.get('/checkconnection', (req, res) => res.send(`Listening to ${process.env.NODE_ENV} on port: ${PORT} while Connected to ${DB_URI}`));

app.get('/user', (req, res) => {
    let email = req.param('email');
    console.log(email);
    model.User.findOne({ where: {email: email}})
        .then((user) => res.json(user))
        .catch((err) => console.log(err));
});


// Export the declared Express app
export default app;