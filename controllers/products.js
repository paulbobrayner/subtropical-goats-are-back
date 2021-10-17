const { fetchProduct } = require('../db/models/product');

exports.getProduct = (req, res, next) => {
  const { id } = req.params;

  fetchProduct(id)
    .then(([product]) => {
      res.status(200).send(product);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error with getting product', err);
      next(err);
    });
};
