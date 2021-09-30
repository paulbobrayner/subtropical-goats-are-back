const apiRouter = require('express').Router();
const { productRouter } = require('../routes/products');
const { reviewsRouter } = require('../routes/reviews');

apiRouter.use('/reviews', reviewsRouter);
apiRouter.use('/product', productRouter);

module.exports = apiRouter;
