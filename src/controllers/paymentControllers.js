const { Payment, Purchase, User, Orderdetail, Product } = require("../db");
const { onlyDateCheck } = require("../helpers/validation");

require("dotenv").config();
const { ACCESS_TOKEN, BACK_URL, BACK_URL_NOTIFICATION, PORT } = process.env;

const mercadopago = require("mercadopago");

//  Agrega credenciales
mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

let idPaymentCreated;

const createPayment = async (req, res, next) => {
  const { purchaseId } = req.body;
  console.log("este es el body :", req.body);
  try {
    // Verificar si la purchase existe
    const purchase = await Purchase.findByPk(purchaseId);
    console.log("esta es la compra:", purchase);
    if (!purchase) {
      return res.status(404).json({ message: "Purchase not found" });
    }
    const totalprice = parseFloat(purchase.dataValues.totalprice);
    const preference = {
      items: [
        {
          title: "Total Purchase",
          unit_price: totalprice,
          quantity: 1,
        },
      ],
      back_urls: {
        success: `${BACK_URL}/success`,
        failure: `${BACK_URL}/failure`,
        pending: `${BACK_URL}/pending`,
      },
      auto_return: "approved",
      binary_mode: true,
      notification_url: `${BACK_URL_NOTIFICATION}/payments/notification`,
    };
    console.log("esta es la preferencia: ", preference);
    // Crear el objeto de pago en Mercado Pago
    const response = await mercadopago.preferences.create(preference);
    console.log("este es el payment :", response);
    const { id, init_point } = response.body;
    // Crear el registro del pago en la base de datos

    const newPayment = await Payment.create({
      purchase_date: new Date(), // Fecha de creación del pago
      total_purchase: totalprice, // Total de la orden
      payment_status: "approved", // Estado del pago
      //id_payment: id.replace(/["-]/g, ""),
      active: true, // Estado activo del pago
    });
    console.log(" este es el newPayment :", newPayment);
    // Asociar el pago a la compra
    await purchase.update({ paymentId: newPayment.id });
    // console.log("esta es la order actualizada: ", order);
    await newPayment.update({
      purchaseId: purchase.id,
      userId: purchase.userId,
    });
    console.log("este es el pago updated 1: ", newPayment);
    //obtento usuario asociado al pago
    const user = await User.findByPk(newPayment.userId);
    //obtengo los productos de las ordenes efectivamente compradas y abonadas
    const ordersDetail = await Orderdetail.findAll({
      where: {
        purchaseId: purchase.id,
      },
      include: [Product],
    });
    // actualizo la variable idPaymentCreated

    idPaymentCreated = newPayment.id;
    //actualizo el campo purchase_history en user
    const currentPurchaseHistory = user.purchase_history;
    //revisar de ver si se puede poner el objeto completo

    const updatedPurchaseHistory = ordersDetail.map((o) => ({
      productId: o.productId,
      price: o.price,
      quantity: o.quantity,
    }));

    const mergedPurchaseHistory = [
      ...currentPurchaseHistory,
      ...updatedPurchaseHistory,
    ];
    await user.update({
      purchase_history: mergedPurchaseHistory,
    });

    console.log("purchase_history:", user.purchase_history);

    return res.status(200).json({ message: "Payment created", init_point });
  } catch (error) {
    console.error("Payment was not created", error);
    return res.status(500).json({ message: "Payment was not created" });
  }
};
//------ DATOS A RECIBIR DE MERCADO PAGO SOBRE EL PAGO -----

async function paymentNotification(req, res) {
  const payment = req.query;

  try {
    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(payment["data.id"]);
      console.log("a tomar", data);
      console.log("Data body:", data.body);
      if (data.body.status === "rejected") {
        const rejectedPayment = await Payment.update(
          {
            //id_payment: data.body.id,
            date_approved: data.body.date_approved,
            // authorization_code: data.body.authorization_code,
            mp_id_order: data.body.order.id,
            //fee_mp: data.body.fee_details[0].amount,
            payment_status: "failed",
          },
          {
            where: {
              id: idPaymentCreated,
            },
          }
        );
      } else {
        const updatedPayment = await Payment.update(
          {
            id_payment: data.body.id,
            date_approved: data.body.date_approved,
            authorization_code: data.body.authorization_code,
            mp_id_order: data.body.order.id,
            fee_mp: data.body.fee_details[0].amount,
            payment_status: data.body.status,
          },
          {
            where: {
              id: idPaymentCreated,
            },
          }
        );
        console.log("pago completo: ", updatedPayment);
      }
    }
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json({ error: error.message });
  }
}

module.exports = { createPayment, paymentNotification };
