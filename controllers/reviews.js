const { addReview } = require('../db/models/reviews');

exports.postReview = (req, res, next) => {
  const review = req.body;
  addReview(review)
    .then(([review]) => {
      res.status(201).send(review);
    })
    .catch(next);
};
