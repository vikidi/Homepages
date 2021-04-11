const roles = require('../models/userRoles').roles;

module.exports = {
  authorizeMin(minRole) {
    return [
      (req, res, next) => {
        const maxRole = req.user.role.reduce((prev, cur) => roles[prev] > roles[cur] ? prev : cur);

        if (roles[maxRole] >= minRole) {
          return next();
        }

        res.end('Unauthorized');
      }
    ];
  },

  authorizeExact(role) {
    return [
      (req, res, next) => {
        const found = req.user.role.filter(curRole => roles[curRole] === role);
        if (found.length > 0) {
          return next();
        }

        res.end('Unauthorized');
      }
    ];
  }
};