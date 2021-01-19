const express = require('express');
const router = express.Router();

const { quotesController } = require('../controllers');

router.get('/', quotesController.getAllQuotes);
router.get('/:isbad', quotesController.getAllBadOrNotQuotes);

module.exports = router;
