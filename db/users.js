const connectDb = require('./connect');

const getAllUsers = async () => {
  const query = await connectDb.query('select * from "NoAddiction"."users"');

  return query;
};

const createNewUser = async (username, email, hashPassword) => {
  const queryResult = await connectDb.query(
    'INSERT INTO "NoAddiction".users ( username, email, hash_password) VALUES ($1, $2, $3)',
    [username, email, hashPassword],
  );

  return queryResult;
};

const getUserByEmail = async (email) => {
  const queryRes = await connectDb.query(
    'SELECT * FROM "NoAddiction".users WHERE email = $1',
    [email],
  );

  return queryRes;
};

const getUserByUsername = async (username) => {
  const queryRes = await connectDb.query(
    'SELECT * FROM "NoAddiction".users WHERE username = $1',
    [username],
  );

  return queryRes;
};

const getUserByEmailOrUsername = async (email, username) => {
  const queryRes = await connectDb.query(
    'SELECT * FROM "NoAddiction".users WHERE username = $1 OR email = $2',
    [username, email],
  );

  return queryRes;
};

module.exports = {
  getAllUsers,
  createNewUser,
  getUserByEmail,
  getUserByUsername,
  getUserByEmailOrUsername,
};
