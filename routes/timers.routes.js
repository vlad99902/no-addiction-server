const express = require('express');
const router = express.Router();

const { timersController } = require('../controllers');

router.get('/', timersController.getAllTimers);
router.get('/records', timersController.getRecordsList);
router.get('/current', timersController.getCurrentTimer);
router.get('/last', timersController.getLastTimer);
router.delete('/delete', timersController.deleteTimerById);
router.put('/current/update', timersController.updateCurrentTimerEndDate);
router.post('/current/create', timersController.createNewCurrentDate);

module.exports = router;
