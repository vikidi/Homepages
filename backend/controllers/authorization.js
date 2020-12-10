const roles = require('../models/userRoles').roles;

module.exports = {
  authorize(minRole) {
    return [
      (req, res, next) => {
        if (roles[req.user.role] >= minRole) {
          return next();
        }

        res.end('Unauthorized');
      }
    ];
  }
};