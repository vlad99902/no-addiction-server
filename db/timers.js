const connectDb = require('./connect');

const getAllTimers = async () => {
  const query = await connectDb.query(`SELECT timers._id, timers.begin_date, 
  timers.end_date, users.username, categories.name
  FROM "NoAddiction".timers
  JOIN "NoAddiction".users ON timers.user_id = users._id
  JOIN "NoAddiction".categories ON timers.category_id = categories._id`);

  return query;
};

module.exports = getAllTimers;
