const express = require('express');
require('express-async-errors');
const cors = require('cors');
const expressSanitizer = require('express-sanitizer');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const morgan = require('morgan');

const middleware = require('./utils/middleware');

const mongodb = require('./database/mongoDB');
const redisdb = require('./database/redisDB');

const apiLimiters = require('./utils/rateLimiters');

// Connect to MongoDB
mongodb.connect();

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

// Create the main app
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}

// Since the app is behind nginx proxy in production
app.enable('trust proxy');

// Body parsing
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(helmet());

app.use(cors());

app.use(expressSanitizer());

app.use(mongoSanitize());

// Limit response time after too many requests
app.use(apiLimiters.getSpeedLimiter());

require('./router.js')(app);

app.use(middleware.errorHandler);

app.use(middleware.unknownEndpoint);

module.exports = app;