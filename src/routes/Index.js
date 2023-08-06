const {Router} = require('express');
const {productsRouter} = require('./ProductsRouter');

const router = Router();

router.use('/products', productsRouter);

module.exports = router;