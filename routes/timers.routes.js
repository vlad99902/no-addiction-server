const express = require('express');
const router = express.Router();

const timersController = require('../controllers/timers.controller');

router.get('/', timersController.getAllTimers);

module.exports = router;
