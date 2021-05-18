const slowDown = require('express-slow-down');
const RedisStore = require('rate-limit-redis');
const rateLimit = require('express-rate-limit');
const redisDB = require('../database/redisDB');

const speedClient = redisDB.getClient(0);
const rateClient = redisDB.getClient(0); // TODO: Change to 1 when using docker

const getSpeedLimiter = () => {
  // Rate limiting only in production
  if (process.env.NODE_ENV !== 'production') return (err, req, res, next) => next();

  return slowDown({
    store: new RedisStore({
      client: speedClient,
      expiry: 60, // 1 minutes
      prefix: 'spli'
    }),
    windowMs: 60 * 1000, // 1 minutes
    delayAfter: 20,
    delayMs: 500,
    maxDelayMs: 10000,
    headers: true
  });
};

// 1h
const getRateLimiter = (prefix, msg, time = 60 * 60 * 1000, maxCall = 5) => {
  // Rate limiting only in production
  if (process.env.NODE_ENV !== 'production') return (req, res, next) => next();

  return rateLimit({
    store: new RedisStore({
      client: rateClient,
      expiry: time / 1000, // ms -> s
      prefix: prefix
    }),
    windowMs: time,
    max: maxCall,
    message: msg,
    keyGenerator: (req/*, res*/) => {
      return req.ip + prefix;
    },
    headers: true
  });
};

module.exports = {
  getSpeedLimiter, getRateLimiter
};