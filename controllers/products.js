const { getProductById } = require('../db/models/product');

exports.getProduct = (req, res, next) => {
  const { id } = req.params;
  const today = new Date();

  getProductById(id)
    .then(([product]) => {
      res.status(200).send({ product });
    })
    .catch(next);
};
