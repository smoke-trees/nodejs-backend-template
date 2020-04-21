const express = require('express')
const app = express()

const compression = require('compression')
const morgan = require('./logging/morgan')
const cors = require('cors')

// Middlewares
app.use(express.json())
app.use(compression())
app.use(cors())

// Logging

app.use(morgan)

// Define routes
app.use('/', require('./routes'))

module.exports = app
