const {Router} = require('express');
const cors = require("cors");
const router = Router();

const productsRouter = require('./productsRouter');
const emailRouter = require('./emailRouter')

router.use(cors());
router.use('/products', productsRouter);
router.use('/email', emailRouter)

module.exports = router;