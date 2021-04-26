const permissions = {
  read: 3,
  create: 6,
  update: 9,
  delete: 12,
  all: 15
};

const permissionList = Object.keys(permissions);

const lowestPermission = permissionList[0];

module.exports = { permissions, permissionList, lowestPermission };