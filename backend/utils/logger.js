const winston = require('winston');
const LogzioWinstonTransport = require('winston-logzio');

const logzioWinstonTransport = new LogzioWinstonTransport({
  level: 'info',
  name: 'homepages_backend',
  token: process.env.LOGZIO_TOKEN,
  host: process.env.LOGZIO_DOMAIN,
  protocol: 'https'
});

const logger = winston.createLogger({
  format: winston.format.simple(),
  transports: [logzioWinstonTransport],
});

if (process.env.NODE_ENV === 'production') {
  winston.remove(winston.transports.Console);
}

const info = message => {
  if (process.env.NODE_ENV === 'development') {
    console.log(message);
  }
  else if (process.env.NODE_ENV === 'production') {
    logger.log('info', message);
  }
};

const error = error => {
  if (process.env.NODE_ENV === 'development') {
    console.error(error);
  }
  else if (process.env.NODE_ENV === 'production') {
    logger.log('error', error);
  }
};

module.exports = {
  info, error
};