const connectDb = require('./connect');

const getAllTimers = async () => {
  const query = await connectDb.query(`SELECT timers._id, timers.begin_date, 
  timers.end_date, users.username, categories.name
  FROM "NoAddiction".timers
  JOIN "NoAddiction".users ON timers.user_id = users._id
  JOIN "NoAddiction".categories ON timers.category_id = categories._id`);

  return query;
};

const getCurrentTimer = async () => {
  const query = await connectDb.query(`SELECT timers._id, timers.begin_date,
  timers.end_date, users.username, categories.name FROM "NoAddiction".timers
  JOIN "NoAddiction".users ON timers.user_id = users._id
  JOIN "NoAddiction".categories ON timers.category_id = categories._id
  WHERE timers.end_date ISNULL `);

  return query;
};

const getLastTimer = async () => {
  const query = await connectDb.query(`SELECT timers._id, begin_date, end_date, users.username, categories.name FROM "NoAddiction".timers
  JOIN "NoAddiction".users ON timers.user_id = users._id
  JOIN "NoAddiction".categories ON timers.category_id = categories._id
where begin_date = (select max(begin_date) from "NoAddiction".timers)
`);

  return query;
};

const updateCurrentTimerEndDate = async (id, date) => {
  const query = await connectDb.query(
    `UPDATE "NoAddiction".timers set end_date=${date} where _id = ${id}`,
  );

  return query;
};

module.exports = {
  getAllTimers,
  getCurrentTimer,
  getLastTimer,
  updateCurrentTimerEndDate,
};
