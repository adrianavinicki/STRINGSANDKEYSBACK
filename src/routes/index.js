const { Router } = require("express");
const cors = require("cors");
const router = Router();

const productsRouter = require('./productsRouter');
const ordersRouter = require("./ordersRouter");
const usersRouter = require("./usersRouter.js");
const purchaseRouter = require("./purchaseRouter");
const paymentsRouter = require("./paymentsRouter");
const emailRouter = require('./emailRouter')
const ratingsRouter = require('./ratingsRouter');

router.use(cors());
router.use('/products', productsRouter);
router.use("/orders", ordersRouter);
router.use("/users", usersRouter);
router.use("/purchases", purchaseRouter);
router.use("/payments", paymentsRouter);
router.use('/email', emailRouter)
router.use('/rating', ratingsRouter);

module.exports = router;
