const roles = {
  viewer: 3,
  editor: 6,
  admin: 12
};

const roleList = Object.keys(roles);

const lowestRole = roleList[0];

module.exports = { roles, roleList, lowestRole };