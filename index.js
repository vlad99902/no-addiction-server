require('dotenv').config();

const express = require('express');

const usersRouter = require('./routes/users.routes');
const timersRouter = require('./routes/timers.routes');
const quotesRoter = require('./routes/quotes.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  );

  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type',
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use('/api/users', usersRouter);
app.use('/api/timers', timersRouter);
app.use('/api/quotes', quotesRoter);

app.get('*', (req, res) => {
  res.send('Route not found');
});

app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
