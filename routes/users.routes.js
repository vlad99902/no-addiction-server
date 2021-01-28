const express = require('express');
const router = express.Router();
// const auth = require('../middleware/auth.middleware');
const passport = require('passport');

const { usersController } = require('../controllers');

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  usersController.getAllUsers,
);

module.exports = router;
