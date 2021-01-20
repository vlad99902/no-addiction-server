const services = require('../services');

class TimersController {
  async getAllTimers(req, res) {
    try {
      const timers = await services.getAllTimers();
      res.json(timers);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getCurrentTimer(req, res) {
    try {
      let timer;
      if (req.query.inaddiction) {
        timer = await services.getInAddiction();
      } else {
        timer = await services.getCurrentTimer();
      }
      res.json(timer);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getLastTimer(req, res) {
    try {
      const timer = await services.getLastTimer();
      res.json(timer);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new TimersController();
