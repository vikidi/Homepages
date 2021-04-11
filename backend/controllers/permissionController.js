const permissionList = require('../models/userPermissions').permissionList;

const getPermissions = async (req, res) => {
  res.json({ roles: permissionList });
};

module.exports = {
  getPermissions
};