const winston = require('winston');
const { Loggly } = require('winston-loggly-bulk');

winston.add(new Loggly({
  token: process.env.LOGGLY_TOKEN,
  subdomain: process.env.LOGGLY_SUBDOMAIN,
  tags: ['homepages-backend'],
  json: true
}));

const info = (message) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(message);
  }
  else if (process.env.NODE_ENV === 'production') {
    winston.log('info', message);
  }
};

const error = error => {
  if (process.env.NODE_ENV === 'development') {
    console.error(error);
  }
  else if (process.env.NODE_ENV === 'production') {
    winston.log('error', error.message);
  }
};

module.exports = {
  info, error
};