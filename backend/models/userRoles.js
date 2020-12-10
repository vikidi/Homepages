const roles = {
  player: 3,
  leader: 6,
  board: 9,
  admin: 12
};

const roleList = Object.keys(roles);

const lowestRole = roleList[0];

module.exports = { roles, roleList, lowestRole };