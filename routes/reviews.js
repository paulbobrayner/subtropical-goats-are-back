const reviewsRouter = require('express').Router();
const { postReview } = require('../controllers/reviews.js');

reviewsRouter.route('/').post(postReview);

module.exports = { reviewsRouter };
