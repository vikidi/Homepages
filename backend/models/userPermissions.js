const permissions = {
  read: 3,
  edit: 6,
  all: 10
};

const permissionList = Object.keys(permissions);

const lowestPermission = permissionList[0];

module.exports = { permissions, permissionList, lowestPermission };