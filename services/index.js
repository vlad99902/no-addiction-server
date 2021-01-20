const {
  getAllTimers,
  getCurrentTimer,
  getLastTimer,
  getInAddiction,
} = require('./timers.service');
const { getAllUsers } = require('./users.service');
const { getAllQuotes, getAllBadOrNotQuotes } = require('./quotes.service');

module.exports = {
  getAllUsers,
  getAllTimers,
  getCurrentTimer,
  getLastTimer,
  getAllQuotes,
  getAllBadOrNotQuotes,
  getInAddiction,
};
