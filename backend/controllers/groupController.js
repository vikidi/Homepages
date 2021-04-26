const groupList = require('../models/userGroups').groupList;

const getGroups = async (req, res) => {
  res.json({ groups: groupList });
};

module.exports = {
  getGroups
};