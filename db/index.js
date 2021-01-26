const {
  getAllTimers,
  getCurrentTimer,
  getLastTimer,
  updateCurrentTimerEndDate,
  createNewDate,
  getRecordsListWithDuration,
  deleteTimerById,
} = require('./timers');
const {
  getAllUsers,
  createNewUser,
  getUserByEmail,
  getUserByUsername,
  getUserByEmailOrUsername,
} = require('./users');
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
  createNewUser,
  getUserByEmail,
  getUserByUsername,
  getUserByEmailOrUsername,
};
