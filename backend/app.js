const express = require('express');
require('express-async-errors');
const cors = require('cors');
const expressSanitizer = require('express-sanitizer');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
var morgan = require('morgan');
const bodyParser = require('body-parser');

const middleware = require('./utils/middleware');

const mongodb = require('./database/mongoDB');
const redisdb = require('./database/redisDB');

const apiLimiters = require('./utils/rateLimiters');

// Close connections on shutdown
process.on('exit', function() {
  mongodb.disconnect();
  redisdb.disconnect();
});

// Close connection on app termination
process.on('SIGINT', function() {
  mongodb.disconnect();
  redisdb.disconnect();
});

const app = express();

// Since the app is behind nginx proxy in production
app.enable('trust proxy');

app.use(bodyParser.json());

app.use(helmet());

app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}

app.use(expressSanitizer());

app.use(mongoSanitize());

// Limit response time after too many requests
app.use(apiLimiters.getSpeedLimiter());

require('./auth/auth');

require('./router.js')(app);

app.use(middleware.errorHandler);

app.use(middleware.unknownEndpoint);

module.exports = app;