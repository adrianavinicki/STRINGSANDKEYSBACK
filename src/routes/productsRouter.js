const {Router} = require('express');


const {getAllProducts, getProductByIdHandler} = require('../handlers/productHandler');

const router = Router();

router.get('/:id', getProductByIdHandler);
router.get("/", getAllProducts)

module.exports = router;