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
  WHERE timers.end_date ISNULL ORDER BY timers.begin_date`);

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

/**
 * Update current timer end date. Make new inAddiction status&
 * @param {number} id
 * @param {date} date
 */
const updateCurrentTimerEndDate = async (id, date) => {
  const queryResult = await connectDb.query(
    `UPDATE "NoAddiction".timers set end_date=${date} where _id = ${id}`,
  );

  return queryResult;
};

/**
 * Function to create new date in DB.
 * If you want to set current timer just make endDate === null
 * @param {number} userId
 * @param {date} beginDate
 * @param {date} endDate default value null
 * @param {number} categoryId
 */
const createNewDate = async (
  userId,
  beginDate,
  //ПОКА НЕ РАБОТАЕТ
  endDate = 'NULL',
  categoryId,
) => {
  const queryResult = await connectDb.query(
    `INSERT INTO "NoAddiction".timers (begin_date, end_date, user_id, category_id) VALUES ('${beginDate}', ${endDate}, ${userId}, ${categoryId})`,
  );
  console.log(queryResult, 'gbpf');
  return queryResult;
};

module.exports = {
  getAllTimers,
  getCurrentTimer,
  getLastTimer,
  updateCurrentTimerEndDate,
  createNewDate,
};
