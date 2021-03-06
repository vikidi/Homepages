const router = require('express').Router();
const passport = require('passport');

const userController = require('../controllers/userController');
const authorizationController = require('../controllers/authorization');

const roles = require('../models/userRoles').roles;

router.route('/')
  .get(passport.authenticate('jwt', { session: false }),
    authorizationController.authorizeMin(roles.admin),
    userController.getUsers);

module.exports = router;