const {Router} = require('express');

const {getProductByIdHandler} = require('../handlers/productHandler');

const productsRouter = Router();

productsRouter.get('/:id', getProductByIdHandler);

module.exports = productsRouter;

