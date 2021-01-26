const db = require('../db/index');

async function getAllUsers() {
  try {
    const users = await db.getAllUsers();
    return users;
  } catch (error) {
    throw new Error('Get all users server error');
  }
}

async function createNewUser(username, email, hashedPassword) {
  try {
    const result = await db.createNewUser(username, email, hashedPassword);
    return result;
  } catch (error) {
    throw new Error(`Create new user error
    Sql error: ${error}`);
  }
}
async function getUserByEmailAndUsername(email, username) {
  try {
    const userByEmail = await db.getUserByEmail(email);
    const userByUsername = await db.getUserByUsername(username);

    return {
      emailExists: !!userByEmail.rows.length,
      usernameExists: !!userByUsername.rows.length,
    };
  } catch (error) {
    throw new Error(`Get user by email and username
    Sql error: ${error}`);
  }
}

async function getUserByEmailOrUsername(email, username) {
  try {
    const queryRes = await db.getUserByEmailOrUsername(email, username);

    return queryRes.rows[0];
  } catch (error) {
    throw new Error(`Get user by email or username
    Sql error: ${error}`);
  }
}

module.exports = {
  getAllUsers,
  createNewUser,
  getUserByEmailAndUsername,
  getUserByEmailOrUsername,
};
