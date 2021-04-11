require('dotenv').config();
const mongoose = require('mongoose');

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_AUTH_SOURCE,
  MONGO_URL,
  MONGO_PORT,
  MONGO_PROD_DB,
  MONGO_DEV_DB,
  MONGO_TEST_DB
} = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 10000,
};

let url = '';
if (MONGO_USERNAME === undefined || MONGO_PASSWORD === undefined || MONGO_AUTH_SOURCE === undefined) {
  if (process.env.NODE_ENV === 'production') {
    url = `mongodb://${MONGO_URL}:${MONGO_PORT}/${MONGO_PROD_DB}`;
  } else if (process.env.NODE_ENV === 'development') {
    url = `mongodb://${MONGO_URL}:${MONGO_PORT}/${MONGO_DEV_DB}`;
  } else if (process.env.NODE_ENV === 'test') {
    url = `mongodb://${MONGO_URL}:${MONGO_PORT}/${MONGO_TEST_DB}`;
  }
} else {
  if (process.env.NODE_ENV === 'production') {
    url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_URL}:${MONGO_PORT}/${MONGO_PROD_DB}?authSource=${MONGO_AUTH_SOURCE}`;
  } else if (process.env.NODE_ENV === 'development') {
    url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_URL}:${MONGO_PORT}/${MONGO_DEV_DB}?authSource=${MONGO_AUTH_SOURCE}`;
  } else if (process.env.NODE_ENV === 'test') {
    url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_URL}:${MONGO_PORT}/${MONGO_TEST_DB}?authSource=${MONGO_AUTH_SOURCE}`;
  }
}

mongoose.connect(url, options)
  .then(async () => {
    if (process.env.NODE_ENV === 'test' && process.env.RESET_DB === 'true') {
      const testController = require('../controllers/testController');
      await testController.resetFunc();
    }
  })
  .catch((err) => {
    console.log(err);
  });

const disconnect = () => {
  mongoose.disconnect();
};

module.exports = {
  disconnect
};