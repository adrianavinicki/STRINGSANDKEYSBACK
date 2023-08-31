const { Router } = require("express");
const {
  createPayment,
  paymentNotification,
} = require("../controllers/paymentControllers");
const { getAllPayments } = require("../controllers/paymentControllers");
//const { modifyOrder } = require("../controllers/putOrder");

const payments = Router();

//payments.get("/", getAllPayments);
payments.post("/generate", createPayment);
payments.post("/notification", paymentNotification);
payments.get("./", getAllPayments);

module.exports = payments;
