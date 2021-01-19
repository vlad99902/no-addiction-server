const services = require('../services');

class QuotesController {
  async getAllQuotes(req, res) {
    try {
      const quotes = await services.getAllQuotes();
      res.send(quotes);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getAllBadOrNotQuotes(req, res) {
    console.log('gbplf');
    try {
      const isBad = req.query.isbad;
      console.log(isBad);
      const quotes = await services.getAllBadOrNotQuotes(isBad);
      res.send(quotes);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new QuotesController();
