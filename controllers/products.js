const { fetchProduct } = require('../db/models/product');

exports.getProduct = (req, res, next) => {
  const { id } = req.params;

  fetchProduct(id)
    .then(([product]) => {
      res.status(200).send(product);
    })
    .catch((err) => {
      console.log(err);
      res.send('Error with getting product', err);
    });
};
