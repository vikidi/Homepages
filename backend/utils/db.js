require('dotenv').config();
const mongoose = require('mongoose');

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_DB,
  MONGO_TEST_DB
} = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 10000,
};

let url = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.tj1nz.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`;

if (process.env.NODE_ENV === 'test') {
  url = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.tj1nz.mongodb.net/${MONGO_TEST_DB}?retryWrites=true&w=majority`;
}

mongoose.connect(url, options)
  .then(() => {
    if (process.env.NODE_ENV === 'test') {
      const testController = require('../controllers/testController');
      testController.resetFunc();
    }
    console.log('MongoDB is connected');
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