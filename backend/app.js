const express = require('express');
require('express-async-errors');
const cors = require('cors');
const expressSanitizer = require('express-sanitizer');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
var morgan = require('morgan');
const bodyParser = require('body-parser');

const middleware = require('./utils/middleware');

const db = require('./utils/db');

// Close connections on shutdown
process.on('exit', function() {
  db.disconnect();
});

// Close connection on app termination
process.on('SIGINT', function() {
  db.disconnect();
});

const app = express();

app.use(bodyParser.json());

app.use(helmet());

app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}

app.use(expressSanitizer());

app.use(mongoSanitize());

require('./auth/auth');

require('./router.js')(app);

app.use(middleware.errorHandler);

app.use(middleware.unknownEndpoint);

module.exports = app;