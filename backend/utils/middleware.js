const logger = require('./logger');

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' });
};

const errorHandler = (err, req, res, next) => {
  logger.error(err);

  if (err.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' });
  }
  else if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }
  else if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ error: 'invalid token' });
  }

  next(err);
};

module.exports = {
  unknownEndpoint,
  errorHandler
};