const {Router} = require('express');
const cors = require("cors");
const router = Router();

const productsRouter = require('./productsRouter');

router.use(cors());
router.use('/products', productsRouter);

module.exports = router;