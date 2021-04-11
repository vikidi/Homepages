const router = require('express').Router();
const passport = require('passport');

const permissionController = require('../controllers/permissionController');
const authorizationController = require('../controllers/authorization');

const roles = require('../models/userRoles').roles;

router.route('/')
  .get(passport.authenticate('jwt', { session: false }),
    authorizationController.authorizeMin(roles.admin),
    permissionController.getPermissions);

module.exports = router;