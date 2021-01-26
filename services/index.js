const {
  getAllTimers,
  getCurrentTimer,
  getLastTimer,
  getInAddiction,
  updateCurrentTimerEndDate,
  createNewCurrentDate,
  getRecordsListWithDuration,
  deleteTimerById,
} = require('./timers.service');
const {
  getAllUsers,
  getUserByEmailOrUsername,
  createNewUser,
} = require('./users.service');
const { getAllQuotes, getAllBadOrNotQuotes } = require('./quotes.service');

module.exports = {
  getAllUsers,
  getAllTimers,
  getCurrentTimer,
  getLastTimer,
  getAllQuotes,
  getAllBadOrNotQuotes,
  getInAddiction,
  updateCurrentTimerEndDate,
  createNewCurrentDate,
  getRecordsListWithDuration,
  deleteTimerById,
  getUserByEmailOrUsername,
  createNewUser,
};
