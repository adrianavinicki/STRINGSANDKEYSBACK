const {Router} = require('express');
const router = Router();

const productsRouter = require('./ProductsRouter');


router.use('/products', productsRouter);

module.exports = router;