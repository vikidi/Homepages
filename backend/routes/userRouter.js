const router = require('express').Router();
const passport = require('passport');

const userController = require('../controllers/userController');
const authorizationController = require('../auth/authorization');

const roles = require('../models/userRoles').roles;

router.route('/')
  .get(passport.authenticate('jwt', { session: false }),
    authorizationController.authorizeRole(roles.admin),
    userController.getUsers);

router.route('/metadata')
  .get(passport.authenticate('jwt', { session: false }),
    authorizationController.authorizeRole(roles.admin),
    userController.getUserMetadata);

module.exports = router;