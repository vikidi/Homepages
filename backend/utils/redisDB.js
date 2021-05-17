const Redis = require('ioredis');
const logger = require('./logger');

const clients = new Map();

const getClient = (dbInd = 0) => {
  if (clients.has(dbInd)) {
    return clients.get(dbInd);
  }

  let client;
  // Unauthenticated client
  if (process.env.REDIS_PASSWORD === undefined || process.env.REDIS_USERNAME === undefined) {
    client = new Redis({
      port: process.env.REDIS_PORT,
      host: process.env.REDIS_URL,
      db: dbInd,
    });
  }

  // Authenticated client
  else {
    client = new Redis({
      port: process.env.REDIS_PORT,
      host: process.env.REDIS_URL,
      password: process.env.REDIS_PASSWORD,
      username: process.env.REDIS_USERNAME,
      db: dbInd,
    });
  }

  clients.set(dbInd, client);

  logger.info('Connected to Redis database ' + dbInd);

  return client;
};

const disconnect = () => {
  for(const client of clients) {
    client.disconnect();
  }
};

module.exports = {
  getClient, disconnect
};