require('dotenv').config({ silent: process.env.NODE_ENV === 'production' });

import express from 'express'
const PORT = process.env.Port || 5000

express()
.get('/', (req, res) => res.send("Hello, world"))
.listen(PORT, () => console.log(`Listening to ${process.env.MY_NAME} on port: ${PORT}`),'0.0.0.0')