if (process.env.NODE_ENV == 'dev') require('dotenv').config()

import express from 'express'
const PORT = process.env.Port || 5000

express()
.get('/', (req, res) => res.send(process.env.MY_NAME))
.listen(PORT, () => console.log(`Listening to ${process.env.MY_NAME} on port: ${PORT}`),'127.0.0.1')