const express = require('express');

const usersRouter = require('./routes/users.routes');
const timersRouter = require('./routes/timers.routes');

const app = express();

app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/timers', timersRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
