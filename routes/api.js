const apiRouter = require('express').Router();
const { productRouter } = require('../routes/products');
const { reviewsRouter } = require('../routes/reviews');

apiRouter.use('/reviews', reviewsRouter);
apiRouter.use('/product', productRouter);

apiRouter.use('/success', (req, res, next) => {
  res.status(200).send('success');
});

module.exports = apiRouter;
