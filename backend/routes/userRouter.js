const router = require('express').Router();
const passport = require('passport');

const userController = require('../controllers/userController');
const authorizationController = require('../auth/authorization');

const roles = require('../models/userRoles').roles;

router.route('/:id')
  .get(passport.authenticate('jwt', { session: false }),
    authorizationController.authorizeRoleOrSelf(roles.admin),
    userController.getUser)

  .put(passport.authenticate('jwt', { session: false }),
    (authorizationController.authorizeRoleOrSelf(roles.admin)),
    userController.updateUser)

  .delete(passport.authenticate('jwt', { session: false }),
    authorizationController.authorizeRoleOrSelf(roles.admin),
    userController.deleteUser);

router.route('/metadata')
  .get(passport.authenticate('jwt', { session: false }),
    authorizationController.authorizeRole(roles.admin),
    userController.getUserMetadata);

router.route('/')
  .get(passport.authenticate('jwt', { session: false }),
    authorizationController.authorizeRole(roles.admin),
    userController.getUsers);

module.exports = router;