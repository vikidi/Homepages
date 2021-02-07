const router = require('express').Router();

const testController = require('../controllers/testController');

router.route('/reset')
  .post(testController.reset);

module.exports = router;