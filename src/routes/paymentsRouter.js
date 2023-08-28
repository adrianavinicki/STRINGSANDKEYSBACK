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
payments.get("/success", (req, res) => res.send("success"));
payments.get("/failure", (req, res) => res.send("failure"));
payments.get("/pending", (req, res) => res.send("pending"));
payments.post("/notification", paymentNotification);
payments.get("./", getAllPayments);

module.exports = payments;
