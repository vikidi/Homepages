const router = require('express').Router();

const contentController = require('../controllers/contentController');

router.route('/:component')
  .get(contentController.getContent);

router.route('/:id')
  .put(contentController.updateContent);

module.exports = router;