const reviewsRouter = require('express').Router();
const { postReview, getReviews } = require('../controllers/reviews.js');

reviewsRouter.route('/').post(postReview);
reviewsRouter.route('/:id').get(getReviews);

module.exports = { reviewsRouter };
