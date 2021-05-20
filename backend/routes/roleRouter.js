const router = require('express').Router();
const passport = require('passport');

const roleController = require('../controllers/roleController');
const authorizationController = require('../auth/authorization');

const roles = require('../models/userRoles').roles;

router.route('/')
  .get(passport.authenticate('jwt', { session: false }),
    authorizationController.authorizeRole(roles.admin),
    roleController.getRoles);

module.exports = router;