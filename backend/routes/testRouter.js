const express = require('express');

const router = express.Router();

const testController = require('../controllers/testController');

router.route('/reset')
  .post(testController.reset);

module.exports = router;