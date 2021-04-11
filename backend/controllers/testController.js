const User = require('../models/user');
const userHelper = require('../tests/userHelper');

const reset = async (req, res) => {
  await resetFunc();

  res.status(204).end();
};

const resetFunc = async (callback = null) => {
  await User.deleteMany({});
  await User.insertMany(userHelper.initialUsers);

  if (callback) {
    callback();
  }
};

module.exports = {
  reset,
  resetFunc
};