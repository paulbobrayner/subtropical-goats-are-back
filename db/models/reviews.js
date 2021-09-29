const connection = require('../connection');

exports.addReview = (review) =>
  connection.insert(review).into('reviews').returning('*');
