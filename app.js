const app = require('express')();
const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes/api');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use('/api', apiRouter);

module.exports = app;
