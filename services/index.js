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
  getUserByEmailAndUsername,
  createNewUser,
  getUserByEmailOrUsername,
  getUserById,
} = require('./users.service');
const { getAllQuotes, getAllBadOrNotQuotes } = require('./quotes.service');
const {
  getCategoriesWithCurrent,
  getAllCategories,
} = require('./categories.service');

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
  getUserByEmailAndUsername,
  createNewUser,
  getUserByEmailOrUsername,
  getAllCategories,
  getUserById,
  getCategoriesWithCurrent,
};
