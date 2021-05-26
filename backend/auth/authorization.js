/**
 * This file contains user authorization related functionality
 */

const roleList = require('../models/userRoles').roles;

/**
 * Function to check group permissions
 * @param {String} groupName Users group name to check
 * @param {{permissions: [String], role: String}} userGroup User group details
 * @param {{String, {permission: String, role: String}}} groups All Accepted groups
 * @returns {Boolean} true if user has rights to given groups
 */
const checkGroup = (groupName, userGroup, groups) => {
  // Check if user has 'all' group and required rights for it
  if (groupName === 'all' && checkGroupAll(userGroup, groups)) return true;

  // User does not belong to this group
  if (!(groupName in groups)) return false;

  const curGroup = groups[groupName];
  if (checkPermissions(userGroup.permissions, curGroup.permission)) return true;
  if (checkRole(userGroup.role, curGroup.role)) return true;

  return false;
};

/**
 * Checks for group 'all' and its permissions
 * @param {{permissions: [String], role: String}} userGroup User groups permissions for 'all'-group
 * @param {{String, {permission: String, role: String}}} groups Allowed groups
 * @returns {Boolean} true if user permissions are sufficient
 */
const checkGroupAll = (userGroup, groups) => {
  // Check if user has sufficient permissions for 'all' related to any group
  for(const groupKey of Object.keys(groups)) {
    const group = groups[groupKey];
    if (checkPermissions(userGroup.permissions, group.permission)) return true;
    if (checkRole(userGroup.role, group.role)) return true;
  }

  return false;
};

/**
 * Checks if role is sufficient
 * @param {Number} userRole Users role
 * @param {Number} role Required role
 * @returns {Boolean} true if role is sufficient
 */
const checkRole = (userRole, role) => {
  if (!userRole || !role) return false;

  return roleList[userRole] >= role;
};

/**
 * Checks are user's permissions valid. Permission 'all' on user passes always.
 * @param {[String]} userPermissions Users permissions
 * @param {String} permission Permission required
 * @returns {Boolean} true if user has required permission
 */
const checkPermissions = (userPermissions, permission) => {
  // No permissions on user
  if (!userPermissions || !permission || userPermissions.length === 0) return false;

  // 'all' gives pass always
  if (userPermissions.includes('all')) return true;

  return userPermissions.includes(permission);
};

/**
 * Module functions to use in routings
 */
module.exports = {
  /**
   * Authorize that user has required or better role
   * @param {Number} minRole Minimum required role
   * @returns {Boolean} true if user role is sufficient
   */
  authorizeRole(minRole) {
    return [
      (req, res, next) => {
        if (!minRole || !req.user.role) return res.status(401).end('Unauthorized');

        // Check for required role
        if (checkRole(req.user.role, minRole)) {
          return next();
        }

        return res.status(401).end('Unauthorized');
      }
    ];
  },

  /**
   * Authorize that user's group is correct
   * @description User group is accepted if user belongs to one group and has one required attribute
   * @param {{String, {permission: String, role: String}}} groups Accepted groups and accepted attributes in them
   * @returns {Boolean} true if user has required rights
   */
  authorizeGroup(groups) {
    return [
      (req, res, next) => {

        // Admin rights
        if (req.user.role === 'admin') return next();

        if (!req.user.groups || Object.keys(req.user.groups).length === 0) return res.status(401).end('Unauthorized');

        // Check for all user groups
        if (Object.keys(req.user.groups).filter(group => checkGroup(group, req.user.groups[group], groups)).length > 0) {
          return next();
        }

        res.status(401).end('Unauthorized');
      }
    ];
  },

  authorizeSelf() {
    return [
      (req, res, next) => {
        if (req.user.id === req.params.id) return next();

        res.status(401).end('Unauthorized');
      }
    ];
  },

  authorizeRoleOrSelf(minRole) {
    return [
      (req, res, next) => {
        if (!minRole || !req.user.role) return res.status(401).end('Unauthorized');

        // Check for required role
        if (checkRole(req.user.role, minRole)) return next();

        // Check for self if role not sufficient
        if (req.user.id === req.params.id) return next();

        res.status(401).end('Unauthorized');
      }
    ];
  }
};