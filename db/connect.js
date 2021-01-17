const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  password: 'apple.android.harD1',
  host: 'localhost',
  port: 5432,
  database: 'NoAddiction',
});

module.exports = pool;
