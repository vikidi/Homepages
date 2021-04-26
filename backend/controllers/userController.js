const User = require('../models/user');

const groupList = require('../models/userGroups').groupList;
const roleList = require('../models/userRoles').roleList;
const permissionList = require('../models/userPermissions').permissionList;

const getUsers = async (req, res) => {
  const content = await User.find({});
  res.json(content);
};

const getUserMetadata = async (req, res) => {
  res.json({
    roles: roleList,
    groups: groupList,
    permissions: permissionList
  });
};

module.exports = {
  getUsers,
  getUserMetadata
};