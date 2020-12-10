const User = require('../models/user');

const getUsers= async (req, res) => {
  const content = await User.find({});
  res.json(content);
};

module.exports = {
  getUsers
};