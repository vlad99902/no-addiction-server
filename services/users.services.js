const db = require('../db/index');

async function getAllUsers() {
  try {
    const users = await db.getAllUsers();
    return users;
  } catch (error) {
    throw new Error('Get all users server error');
  }
}

module.exports = { getAllUsers };
