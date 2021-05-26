const User = require('../models/user');

const groupList = require('../models/userGroups').groupList;
const roleList = require('../models/userRoles').roleList;
const permissionList = require('../models/userPermissions').permissionList;

const getUser = async (req, res) => {
  const content = await User.findOne({ _id: req.params.id });

  if (!content) res.sendStatus(404);

  res.json(content);
};

const updateUser = async (req, res) => {
  await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(doc => {
      res.json(doc);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};

const deleteUser = async (req, res) => {
  await User.findOneAndDelete({ _id: req.params.id })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};

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
  getUser,
  updateUser,
  deleteUser,
  getUsers,
  getUserMetadata
};