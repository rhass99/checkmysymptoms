// Importing dotenv to be used only in development
// Heroku has NODE_ENV = 'production' so will not require dotenv
if (process.env.NODE_ENV === 'development') require('dotenv').config();

// Import http, createServer and express app from the server file
import http from 'http';
import { createServer} from 'http';
import app from './core/server';
const PORT = process.env.PORT || 4000;

// Create the server and run app.
const server = createServer(app);
server.listen(PORT, '0.0.0.0');



