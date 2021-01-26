const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');

const { usersController } = require('../controllers');

router.get('/', auth, usersController.getAllUsers);

module.exports = router;
