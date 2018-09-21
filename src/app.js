require('dotenv').config({ silent: process.env.NODE_ENV === 'production' });

import express from 'express'
const PORT = process.env.Port || 5000

express()
.get('/', (req, res) => res.send("Hello, world"))
.listen(PORT, () => console.log(`Listening on port: ${PORT}`))