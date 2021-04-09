const router = require('express').Router();
const passport = require('passport');

const authenticationController = require('../controllers/authentication');
const authorizationController = require('../controllers/authorization');

const roles = require('../models/userRoles').roles;

router.route('/signup')
  .post(passport.authenticate('signup', { session: false }),
    authenticationController.signup);

router.route('/login')
  .post(authenticationController.login);

router.route('/secret')
  .get(passport.authenticate('jwt', { session: false }),
    authorizationController.authorize(roles.admin),
    authenticationController.test);

module.exports = router;