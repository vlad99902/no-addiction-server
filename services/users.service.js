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

async function getUserByEmailOrUsername(usernameOrEmail) {
  try {
    const queryRes = await db.getUserByEmailOrUsername(usernameOrEmail);

    return queryRes.rows[0];
  } catch (error) {
    throw new Error(`Get user by email or username
    Sql error: ${error}`);
  }
}

async function getUserById(id) {
  try {
    const queryRes = await db.getUserById(id);

    return queryRes;
  } catch (error) {
    throw new Error(`Can not get user by id
    Sql error: ${error}`);
  }
}

module.exports = {
  getAllUsers,
  createNewUser,
  getUserByEmailAndUsername,
  getUserByEmailOrUsername,
  getUserById,
};
