const db = require('../db');

/**
 * Get categories with current flag
 * @param {number} userId
 */
const getCategoriesWithCurrent = async (userId) => {
  try {
    let categories = await db.getAllCategories();
    let currentCategories = await db.getCurrentCategoriesById(userId);

    categories = categories.rows;
    currentCategories = currentCategories.rows;

    const currentCategoriesIdArray = currentCategories.map(
      (cat) => cat.category_id,
    );

    return categories.map((category) => {
      if (currentCategoriesIdArray.includes(category._id))
        return { id: category._id, name: category.name, isOn: true };
      return { id: category._id, name: category.name, isOn: false };
    });
  } catch (error) {
    throw new Error('Error with get categories with current flag');
  }
};

/**
 * Get all categories servise
 */
const getAllCategories = async () => {
  try {
    const categories = await db.getAllCategories();
    return categories.rows;
  } catch (error) {
    throw new Error('Error with get all categories');
  }
};

module.exports = {
  getCategoriesWithCurrent,
  getAllCategories,
};
