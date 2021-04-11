const roleList = require('../models/userRoles').roleList;

const getRoles = async (req, res) => {
  res.json({ roles: roleList });
};

module.exports = {
  getRoles
};