const connection = require('../connection');

exports.addReview = (review) =>
  connection.insert(review).into('reviews').returning('*');

exports.fetchReviews = (id) =>
  connection
    .select('*')
    .from('reviews')
    .where('reviews.product_id', '=', id)
    .returning('*');
