const e = require('express');
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
      let timer = null;
      if (req.query.inAddiction) {
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

  updateCurrentTimerEndDate = async (req, res) => {
    try {
      await services.updateCurrentTimerEndDate(req.body.id, req.body.endDate);

      res
        .status(200)
        .json({ message: `Current date id: ${req.body.id} updated` });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  };

  createNewCurrentDate = async (req, res) => {
    try {
      const { userId, beginDate, categoryId } = req.body;
      await services.createNewCurrentDate(userId, beginDate, categoryId);

      res.status(201).json({
        message: `New current date added. {id: ${userId}, beginDate:${beginDate}, categoryId: ${categoryId}`,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  };

  getRecordsList = async (req, res) => {
    try {
      let limit = req.query.limit;
      // if (!limit) limit = 10;

      const result = await services.getRecordsListWithDuration(limit);

      res.json(result);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  /**
   * Delete timer by id route controller
   * @param {} req
   * @param {} res
   */
  deleteTimerById = async (req, res) => {
    try {
      const timerId = req.body.timerId;
      const result = await services.deleteTimerById(timerId);

      res
        .status(200)
        .json({
          message: `Timer with timerId: ${timerId} was successfully deleted`,
        });
    } catch (error) {
      res.status(500).send(error);
    }
  };
}

module.exports = new TimersController();
