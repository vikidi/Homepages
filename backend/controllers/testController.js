const User = require('../models/user');
const Content = require('../models/content');
const helper = require('../tests/test_helper');

const reset = async (req, res) => {
  await resetFunc();

  res.status(204).end();
};

const resetFunc = async () => {
  await User.deleteMany({});
  await User.insertMany(helper.initialUsers);

  await Content.deleteMany({});
  await Content.insertMany(helper.initialContents);
};

module.exports = {
  reset,
  resetFunc
};