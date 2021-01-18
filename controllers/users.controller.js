const getAllUsers = require('../db/users');

class UsersController {
  async getAllUsers(req, res) {
    const users = await getAllUsers();

    res.json(users.rows);
  }
}

module.exports = new UsersController();
