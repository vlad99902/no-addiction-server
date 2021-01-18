const express = require('express');
const router = express.Router();

const { usersController } = require('../controllers');

router.get('/', usersController.getAllUsers);

module.exports = router;
