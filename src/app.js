if (process.env.NODE_ENV === 'development') require('dotenv').config();

import http from 'http';
import { createServer} from 'http';
import app from './core/server';
const PORT = process.env.PORT || 4000;

const server = createServer(app);
server.listen(PORT, '0.0.0.0');



