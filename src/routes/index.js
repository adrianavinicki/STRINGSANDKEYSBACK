const { Router } = require("express");
const cors = require("cors");
const router = Router();

const productsRouter = require("./productsRouter");
const ordersRouter = require("./ordersRouter");
const usersRouter = require("./usersRouter.js");
const paymentsRouter = require("./paymentsRouter");

router.use(cors());
router.use("/products", productsRouter);
router.use("/orders", ordersRouter);
router.use("/users", usersRouter);
router.use("/payments", paymentsRouter);

module.exports = router;
