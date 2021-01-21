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
  timers.end_date FROM "NoAddiction".timers WHERE timers.end_date ISNULL ORDER BY timers.begin_date DESC`);

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
 * Get all user records with limit
 * @param {number} limit - limit rows
 */

const getRecordsListWithDuration = async (limit = 10) => {
  const queryResult = await connectDb.query(
    `
  SELECT timers._id, timers.begin_date, timers.end_date ,timers.end_date FROM "NoAddiction".timers
  WHERE timers.end_date IS NOT NULL ORDER BY end_date-begin_date DESC LIMIT $1`,
    [limit],
  );

  return queryResult;
};

/**
 * Update current timer end date. Make new inAddiction status&
 * @param {number} id
 * @param {date} date
 */
const updateCurrentTimerEndDate = async (id, date) => {
  const queryResult = await connectDb.query(
    `UPDATE "NoAddiction".timers set end_date=$1 where _id = $2`,
    [date, id],
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

  endDate = null,
  categoryId,
) => {
  const queryResult = await connectDb.query(
    `INSERT INTO "NoAddiction".timers (begin_date, end_date, user_id, category_id) VALUES ($1, $2, $3, $4)`,
    [beginDate, endDate, userId, categoryId],
  );

  return queryResult;
};

module.exports = {
  getAllTimers,
  getCurrentTimer,
  getLastTimer,
  updateCurrentTimerEndDate,
  createNewDate,
  getRecordsListWithDuration,
};
