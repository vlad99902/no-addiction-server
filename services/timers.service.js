const db = require('../db/index');

async function getAllTimers() {
  try {
    const timers = await db.getAllTimers();
    return timers.rows;
  } catch (error) {
    throw new Error('Get all timers server error');
  }
}

async function getCurrentTimer() {
  try {
    const currentTimer = await db.getCurrentTimer();

    //подумать что на фронте
    if (currentTimer.rows.length === 0) {
      return { message: `No current timer` };
    }

    return currentTimer.rows[0];
  } catch (error) {
    throw new Error('Get current timer server error');
  }
}

const getInAddiction = async (req, res) => {
  try {
    const timer = await db.getCurrentTimer();
    if (!timer.rows.length) {
      return { inAddiction: true };
    } else return { inAddiction: false };
  } catch (error) {
    throw new Error('Cannot get inAddiction status');
  }
};

async function getLastTimer() {
  try {
    const lastTimer = await db.getLastTimer();
    return lastTimer.rows;
  } catch (error) {
    throw new Error('Get last timer error');
  }
}

module.exports = {
  getAllTimers,
  getCurrentTimer,
  getLastTimer,
  getInAddiction,
};
