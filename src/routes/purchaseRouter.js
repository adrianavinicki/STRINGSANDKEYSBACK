const { Router } = require("express");
require("dotenv").config();

const { createPurchase } = require("../controllers/purchaseControllers");
// const {
//   getById,
//   getOrderByProperties,
// } = require("../handlers/orderHandler.js");

const router = Router();

// router.get("/", getOrderByProperties); //falta probar ruta
// router.get("/:id", getById); // falta probar ruta
router.post("/create", createPurchase);

module.exports = router;