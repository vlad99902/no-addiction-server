const services = require('../services');

class UsersController {
  async getAllUsers(req, res) {
    try {
      const users = await services.getAllUsers();
      res.json(users.rows);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new UsersController();
