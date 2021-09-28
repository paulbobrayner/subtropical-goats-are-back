const reviewsRouter = require('express').Router();
const { getReviews } = require('../controllers/reviews.js');

//reviewsRouter.route('/:id').get(getReviews);

module.exports = { reviewsRouter };
