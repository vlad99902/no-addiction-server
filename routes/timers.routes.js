const express = require('express');
const router = express.Router();

const { timersController } = require('../controllers');

router.get('/', timersController.getAllTimers);
router.get('/current', timersController.getCurrentTimer);
router.get('/last', timersController.getLastTimer);

module.exports = router;
