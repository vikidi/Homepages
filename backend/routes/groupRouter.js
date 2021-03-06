const router = require('express').Router();
const passport = require('passport');

const groupController = require('../controllers/groupController');
const authorizationController = require('../controllers/authorization');

const roles = require('../models/userRoles').roles;

router.route('/')
  .get(passport.authenticate('jwt', { session: false }),
    authorizationController.authorizeMin(roles.admin),
    groupController.getGroups);

module.exports = router;