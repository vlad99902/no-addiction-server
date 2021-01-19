const { getAllTimers, getCurrentTimer, getLastTimer } = require('./timers');
const getAllUsers = require('./users');
const { getAllQuotes, getAllBadOrNotQuotes } = require('./quotes');

module.exports = {
  getAllTimers,
  getAllUsers,
  getCurrentTimer,
  getLastTimer,
  getAllQuotes,
  getAllBadOrNotQuotes,
};
