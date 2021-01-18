const {
  getAllTimers,
  getCurrentTimer,
  getLastTimer,
} = require('./timers.services');
const { getAllUsers } = require('./users.services');

module.exports = { getAllUsers, getAllTimers, getCurrentTimer, getLastTimer };
