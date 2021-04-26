const permissionList = require('../models/userPermissions').permissionList;

const getPermissions = async (req, res) => {
  res.json({ permissions: permissionList });
};

module.exports = {
  getPermissions
};