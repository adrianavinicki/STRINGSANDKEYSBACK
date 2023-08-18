const { Router } = require("express");
const cors = require("cors");
const router = Router();

const productsRouter = require("./productsRouter");
const ordersRouter = require("./ordersRouter");
const usersRouter = require("./usersRouter.js");
const purchaseRouter = require("./purchaseRouter");

router.use(cors());
router.use("/products", productsRouter);
router.use("/orders", ordersRouter);
router.use("/users", usersRouter);
router.use("/purchases", purchaseRouter);

module.exports = router;
