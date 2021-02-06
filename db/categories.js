const connect = require('./connect');

/**
 * Query to get all user current cat by userId
 * @param {number} userId
 */
const getCurrentCategoriesById = async (userId) => {
  const queryRes = await connect.query(
    'SELECT * FROM "NoAddiction".current_user_categories WHERE user_id = $1',
    [userId],
  );

  return queryRes;
};

/**
 * Query to get all categories list
 */
const getAllCategories = async () => {
  const queryRes = await connect.query(
    'SELECT * FROM "NoAddiction".categories ORDER BY categories._id',
  );

  return queryRes;
};

module.exports = {
  getAllCategories,
  getCurrentCategoriesById,
};
