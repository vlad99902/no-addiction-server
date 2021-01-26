const express = require('express');
const router = express.Router();

const { usersController, authController } = require('../controllers');

router.get('/login', usersController.getAllUsers);
router.post('/register', authController.registerWithEmail);

module.exports = router;
