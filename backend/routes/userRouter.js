const router = require('express').Router();
//const passport = require('passport');

const contentController = require('../controllers/userController');
//const authorizationController = require('../controllers/authorization');

//const roles = require('../models/userRoles').roles;

router.route('/')
  .get(contentController.getUsers);
/*
router.route('/:id')
  .put(passport.authenticate('jwt', { session: false }),
    authorizationController.authorize(roles.board),
    contentController.updateContent);
*/
module.exports = router;