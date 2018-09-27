import express from 'express';
import setupMiddleware from './middleware';

// Declare an app from express
const app = express();
// Declare express router
const apiRouter = express.Router();
// Setup middleware
setupMiddleware(app);

export default app