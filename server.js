const app = require('./app')
const https = require('https');
const logger = require('./logging/logger')
const fs = require('fs');
const path = require('path');

httpsOptions = {
  ca: fs.readFileSync(path.join('certs', 'CA-cert.pem')),
  cert: fs.readFileSync(path.join('certs', 'server-cert.pem')),
  key: fs.readFileSync(path.join('certs', 'server-key.pem')),
  requestCert: true,
  rejectUnauthorized: false
}

const PORT = process.env.PORT || 8443

const server = https.createServer(httpsOptions, app)

server.listen(PORT, () => {
  logger.info(`started server on port ${PORT}`)
})
