const express = require('express')
const app = express()

const compression = require('compression')
const morgan = require('./logging/morgan')

// Middlewares
app.use(express.json())
app.use(compression())

// Logging

app.use(morgan)

// Define routes
app.use('/', require('./routes'))

module.exports = app
