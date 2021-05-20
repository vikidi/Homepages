const router = require('express').Router();
const passport = require('passport');

const authenticationController = require('../auth/authentication');
const authorizationController = require('../auth/authorization');

const apiLimiters = require('../utils/rateLimiters');

const roles = require('../models/userRoles').roles;

// Do not allow signup at least yet in production
if (process.env.NODE_ENV !== 'production') {
  router.route('/signup')
    .post(apiLimiters.getRateLimiter('sl', 'Too many requests to signup, try again after 1 hour'),
      passport.authenticate('signup', { session: false }),
      authenticationController.signup);
}

router.route('/login')
  .post(apiLimiters.getRateLimiter('ll', 'Too many requests to login, try again after 1 hour'),
    authenticationController.login);

router.route('/secret')
  .get(passport.authenticate('jwt', { session: false }),
    authorizationController.authorizeGroup({ 'ttlk': { permission: 'read', role: roles.editor } }),
    authenticationController.test);

module.exports = router;