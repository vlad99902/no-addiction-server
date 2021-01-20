const services = require('../services');
const connection = require('../db/connect');
class QuotesController {
  async getQuotes(req, res) {
    try {
      const isBad = req.query.isbad;
      let quotes;
      if (isBad !== undefined) {
        quotes = await services.getAllBadOrNotQuotes(isBad);
      } else {
        quotes = await services.getAllQuotes();
      }

      res.send(quotes);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getAllBadOrNotQuotes(req, res) {
    try {
      const isBad = req.params.isbad;

      const quotes = await services.getAllBadOrNotQuotes(isBad);
      res.send(quotes);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new QuotesController();
