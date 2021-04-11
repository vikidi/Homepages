const roles = {
  visitor: 3,
  creator: 6,
  admin: 12
};

const roleList = Object.keys(roles);

const lowestRole = roleList[0];

module.exports = { roles, roleList, lowestRole };