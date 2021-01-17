const getAllUsers = require('../db/users');

class UsersController {
  async getUsers(req, res) {
    const users = await getAllUsers();

    res.json(users.rows);
  }
}

module.exports = new UsersController();
