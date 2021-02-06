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
  getUserById,
} = require('./users');
const { getAllQuotes, getAllBadOrNotQuotes } = require('./quotes');
const { getCurrentCategoriesById, getAllCategories } = require('./categories');

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
  getUserById,
  deleteTimerById,
  createNewUser,
  getUserByEmail,
  getUserByUsername,
  getUserByEmailOrUsername,
  getCurrentCategoriesById,
  getAllCategories,
};
