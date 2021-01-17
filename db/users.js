const connectDb = require('./connect');

const getAllUsers = async () => {
  const query = await connectDb.query('select * from "NoAddiction"."users"');

  return query;
};

module.exports = getAllUsers;
