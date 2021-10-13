const app = require('express')();
const { createServer } = require('http');
const { Server } = require('socket.io');
const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes/api');
require('dotenv').config();
const { fetchReviews } = require('./db/models/reviews');

app.use(cors());
app.use(express.json());

const httpServer = createServer(app);
httpServer.listen(9081, () => console.log(`listening on 9081`));

const io = new Server(httpServer, {
  /* options */
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
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

app.use('/api', apiRouter);

module.exports = app;
