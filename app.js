const app = require('express')();
const cors = require('cors');
const apiRouter = require('./routes/api');
require('dotenv').config();

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    allowedHeaders: ['content-type'],
  })
);

app.use('/api', apiRouter);

module.exports = app;
