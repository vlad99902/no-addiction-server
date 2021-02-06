const services = require('../services');

class CategoriesController {
  async getCategoriesWithCurrent(req, res) {
    const userId = req.user.userId;
    const isOn = req.query.isOn;
    try {
      let result;
      if (isOn === 'true') {
        result = await services.getCategoriesWithCurrent(userId);
      } else {
        result = await services.getAllCategories();
      }

      res.json(result);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Something wromg with get current categories' });
    }
  }
}

module.exports = new CategoriesController();
