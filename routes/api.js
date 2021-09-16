const apiRouter = require('express').Router();
const { reviewsRouter, productRouter } = require('../routes/reviews');

apiRouter.use('/reviews', reviewsRouter);
apiRouter.use('/product', productRouter);

module.exports = apiRouter;
