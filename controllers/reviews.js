const { addReview, fetchReviews } = require('../db/models/reviews');

exports.postReview = (req, res, next) => {
  const review = req.body;
  addReview(review)
    .then(([review]) => {
      res.status(201).send(review);
    })
    .catch(next);
};

exports.getReviews = (req, res, next) => {
  const { id } = req.params;
  fetchReviews(id)
    .then((reviews) => {
      res.status(200).send(reviews);
    })
    .catch(next);
};
