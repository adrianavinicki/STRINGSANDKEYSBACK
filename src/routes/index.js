const { Router } = require("express");
const cors = require("cors");
const router = Router();

const productsRouter = require("./productsRouter");
const ordersRouter = require("./ordersRouter");
const usersRouter = require("./usersRouter.js");

router.use(cors());
router.use("/products", productsRouter);
router.use("/orders", ordersRouter);
router.use("/users", usersRouter);

module.exports = router;
