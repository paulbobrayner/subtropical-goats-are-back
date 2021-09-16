const productRouter = require('express').Router();
const { getProduct } = require('../controllers/products.js');

productRouter.route('/:id').get(getProduct);

module.exports = { productRouter };
