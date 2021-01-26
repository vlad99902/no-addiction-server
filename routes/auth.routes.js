const express = require('express');
const router = express.Router();

const { usersController, authController } = require('../controllers');

router.post('/login', authController.loginWithEmail);
router.post('/register', authController.registerWithEmail);

module.exports = router;
