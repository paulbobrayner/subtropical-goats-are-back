const app = require('express')();
const { createServer } = require('http');
const { Server } = require('socket.io');
const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes/api');
require('dotenv').config();
const { fetchReviews } = require('./db/models/reviews');
const httpServer = createServer(app);

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    allowedHeaders: ['content-type'],
    methods: ['GET', 'POST'],
    credentials: true,
  })
);

app.use(express.json());
app.use('/api', apiRouter);

app.use((err, req, res, next) => {
  console.log('ERROR', err);
  res.send('error', err);
});

const io = new Server(httpServer, {
  cors: {
    origin: process.env.CORS_ORIGIN,
    allowedHeaders: ['content-type'],
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

io.on('connection', (socket) => {
  console.log('connected', socket.id);

  socket.on('submitReview', function (id) {
    fetchReviews(id).then((reviews) => {
      io.emit('reviewsUpdate', reviews);
    });
  });
});

const { PORT = 9081 } = process.env;

httpServer.listen(PORT, () => console.log(`listening on ${PORT}`));

module.exports = app;
