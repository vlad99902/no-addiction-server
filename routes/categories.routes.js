const express = require('express');
const router = express.Router();

const { categoriesController } = require('../controllers');

const authMiddleware = require('../middleware/auth.middleware');

router.get('/', authMiddleware, categoriesController.getCategoriesWithCurrent);

module.exports = router;
