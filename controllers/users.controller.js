const services = require('../services');

class UsersController {
  async getAllUsers(req, res) {
    try {
      const users = await services.getAllUsers();
      res.json(users.rows);
    } catch (error) {
      res.status(500).json({ message: String(error) });
    }
  }

  async getUserById(req, res) {
    const id = req.user.userId;
    try {
      const user = await services.getUserById(id);
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: String(error) });
    }
  }
}

module.exports = new UsersController();
