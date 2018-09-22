if (process.env.NODE_ENV === 'dev') require('dotenv').config()

import express from 'express'
const PORT = process.env.PORT || 5000

express()
.get('/', (req, res) => res.send(`Listening to ${process.env.NODE_ENV} on port: ${PORT}`))
.listen(PORT, '0.0.0.0')