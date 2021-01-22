const {
  getAllTimers,
  getCurrentTimer,
  getLastTimer,
  updateCurrentTimerEndDate,
  createNewDate,
  getRecordsListWithDuration,
  deleteTimerById,
} = require('./timers');
const getAllUsers = require('./users');
const { getAllQuotes, getAllBadOrNotQuotes } = require('./quotes');

module.exports = {
  getAllTimers,
  getAllUsers,
  getCurrentTimer,
  getLastTimer,
  getAllQuotes,
  getAllBadOrNotQuotes,
  updateCurrentTimerEndDate,
  createNewDate,
  getRecordsListWithDuration,
  deleteTimerById,
};
