const getAllTimers = require('../db/timers');

class TimersController {
  async getAllTimers(req, res) {
    const timers = await getAllTimers();

    res.json(timers.rows);
  }
}

module.exports = new TimersController();
