const groupList = require('../models/userGroups').groupList;

const getGroups = async (req, res) => {
  res.json({ roles: groupList });
};

module.exports = {
  getGroups
};