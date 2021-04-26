const router = require('express').Router();
const passport = require('passport');

const authenticationController = require('../controllers/authentication');
const authorizationController = require('../controllers/authorization');

const roles = require('../models/userRoles').roles;

// Do not allow signup at least yet in production
if (process.env.NODE_ENV !== 'production') {
  router.route('/signup')
    .post(passport.authenticate('signup', { session: false }),
      authenticationController.signup);
}

router.route('/login')
  .post(authenticationController.login);

router.route('/secret')
  .get(passport.authenticate('jwt', { session: false }),
    authorizationController.authorizeExact(roles.admin),
    authenticationController.test);

module.exports = router;