const express = require('express');
const passport = require('passport');

const router = express.Router();

const contentController = require('../controllers/contentController');
const authorizationController = require('../controllers/authorization');

const roles = require('../models/userRoles').roles;

router.route('/:component')
  .get(contentController.getContent);

router.route('/:id')
  .put(passport.authenticate('jwt', { session: false }),
    authorizationController.authorize(roles.board),
    contentController.updateContent);

module.exports = router;