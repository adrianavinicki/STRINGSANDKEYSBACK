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
/*payments.get("/success", (req, res) => {
  console.log("Redireccionando a String And Keys");
  res.redirect("https://stringsandkeys.up.railway.app");
});
payments.get("/failure", (req, res) => {
  console.log("Redireccionando a String And Keys");
  res.redirect("https://stringsandkeys.up.railway.app");
});
payments.get("/pending", (req, res) => {
  console.log("Redireccionando a String And Keys");
  res.redirect("https://stringsandkeys.up.railway.app");
});*/
payments.post("/notification", paymentNotification);
payments.get("./", getAllPayments);

module.exports = payments;
