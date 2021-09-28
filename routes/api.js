const apiRouter = require('express').Router();
const { productRouter } = require('../routes/products');

// apiRouter.use('/reviews', reviewsRouter);
apiRouter.use('/product', productRouter);

module.exports = apiRouter;
