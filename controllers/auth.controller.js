const services = require('../services');
const bcript = require('bcryptjs');

class AuthController {
  async registerWithEmail(req, res) {
    try {
      const { username, email, password } = req.body;
      const candidate = await services.getUserByEmailOrUsername(
        email,
        username,
      );

      //check if email or username exists in db
      if (candidate.usernameExists && candidate.usernameExists) {
        return res.status(409).json({
          message: `User with username: ${username}, email: ${email} is already registred`,
        });
      }
      if (candidate.emailExists) {
        return res.status(409).json({
          message: `User with email: ${email} is already registred`,
        });
      }
      if (candidate.usernameExists) {
        return res.status(409).json({
          message: `User with username: ${username} is already registred`,
        });
      }

      const hashedPassword = await bcript.hash(password, 12);
      await services.createNewUser(username, email, hashedPassword);

      res
        .status(201)
        .json({ message: `User ${username || email} registred successfully` });
    } catch (error) {
      res.status(500).json({ message: 'Something wrong with register' });
      console.log(error);
    }
  }
}

module.exports = new AuthController();
