const Redis = require('ioredis');
const logger = require('../utils/logger');

const clients = new Map();

const getClient = (dbInd) => {
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

  client.on('ready', () => {
    logger.info(`Connected to ${process.env.REDIS_URL}:${process.env.REDIS_PORT}`);
    logger.info(`Database number: ${dbInd}`);
  });

  return client;
};

const disconnect = () => {
  for(const client of clients) {
    // Get the value
    client[1].disconnect();
  }
};

module.exports = {
  getClient, disconnect
};