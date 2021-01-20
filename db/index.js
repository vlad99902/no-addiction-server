const {
  getAllTimers,
  getCurrentTimer,
  getLastTimer,
  updateCurrentTimerEndDate,
  createNewDate,
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
};
