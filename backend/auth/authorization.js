const roles = require('../models/userRoles').roles;
const permissions = require('../models/userPermissions').permissions;

module.exports = {
  authorizeMin(minRole, minPermission) {
    return [
      (req, res, next) => {
        let roleOK = false;
        let permissionOK = false;

        // Check for required role
        if (minRole) {
          const maxRole = req.user.role.reduce((prev, cur) => roles[prev] > roles[cur] ? prev : cur);
          if (roles[maxRole] >= minRole) {
            roleOK = true;
          }
          else {
            return res.end('Unauthorized');
          }
        }
        else {
          roleOK = true;
        }

        // Check for required permission
        if (minPermission) {
          const maxPermission = req.user.permission.reduce((prev, cur) => permissions[prev] > permissions[cur] ? prev : cur);
          if (permissions[maxPermission] >= minPermission) {
            permissionOK = true;
          }
          else {
            return res.end('Unauthorized');
          }
        }
        else {
          permissionOK = true;
        }

        // If both OK, allow access
        if (roleOK && permissionOK) {
          return next();
        }

        res.end('Unauthorized');
      }
    ];
  },

  authorizeExact(role, permission) {
    return [
      (req, res, next) => {
        let roleOK = false;
        let permissionOK = false;

        if (role) {
          const found = req.user.role.filter(curRole => roles[curRole] === role);
          if (found.length > 0) {
            roleOK = true;
          }
          else {
            return res.end('Unauthorized');
          }
        }
        else {
          roleOK = true;
        }

        if (permission) {
          const found = req.user.permission.filter(curPerm => permissions[curPerm] === permission);
          if (found.length > 0) {
            permissionOK = true;
          }
          else {
            return res.end('Unauthorized');
          }
        }
        else {
          permissionOK = true;
        }

        // If both OK, allow access
        if (roleOK && permissionOK) {
          return next();
        }

        res.end('Unauthorized');
      }
    ];
  },

  authorizeGroup(groups) {
    return [
      (req, res, next) => {
        const found = req.user.group.filter(curGroup => groups.includes(curGroup));
        if (found.length > 0) {
          return next();
        }

        res.end('Unauthorized');
      }
    ];
  }
};