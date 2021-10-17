const app = require('express')();
const { createServer } = require('http');
const { Server } = require('socket.io');
const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes/api');
require('dotenv').config();
const { fetchReviews } = require('./db/models/reviews');

app.use(
  cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN,
    allowedHeaders: ['content-type'],
  })
);
app.use(express.json());
app.use('/api', apiRouter);

app.use((err, req, res, next) => {
  console.log('ERROR', err);
  res.send('error', err);
});

const httpServer = createServer(app);
httpServer.listen(9081, () => console.log(`listening on 9081`));

const io = new Server(httpServer, {
  /* options */
  cors: {
    origin: process.env.CORS_ORIGIN,
    allowedHeaders: ['content-type'],
    credentials: true,
  },
});
io.on('connection', (socket) => {
  console.log('connected');

  socket.on('submitReview', function (id) {
    fetchReviews(id).then((reviews) => {
      socket.emit('reviewsUpdate', reviews);
    });
  });
});

module.exports = app;
