const { Payment, Purchase, User, Orderdetail, Product } = require("../db");
const { onlyDateCheck } = require("../helpers/validation");

require("dotenv").config();
const {
  ACCESS_TOKEN,
  FRONT_URL_SUCCESS,
  FRONT_URL_PENDING,
  FRONT_URL_FAILED,
  BACK_URL_SUCCESS,
  BACK_URL_FAILED,
  BACK_URL_PENDING,
  BACK_URL_NOTIFICATION,
  PORT,
} = process.env;

const mercadopago = require("mercadopago");

//  Agrega credenciales
mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

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
        success: BACK_URL_SUCCESS,
        failed: BACK_URL_FAILED,
      },
      auto_return: "approved",
      binary_mode: true,
      notification_url: BACK_URL_NOTIFICATION,
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
      id_payment: id.replace(/["-]/g, ""),
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
  const { query } = req;
  const topic = query.topic || query.type;
  //var merchantOrder;
  //var payment;
  switch (topic) {
    case "payment":
      /*const paymentId = query.id || query["data.id"];
      const merchant_Order = await mercadopago.payment.findById(paymentId);
      console.log("notification: merchant order:", merchant_Order);
      const mp_Payment_Id = merchant_Order.body.id;
      console.log("id del pago en mp: ", mp_Payment_Id);
      const payment = await mercadopago.payment.findById(mp_Payment_Id);
      const idS = payment.body.additional_info.items.map(
        (e) => e.mp_Payment_Id.id
      );*/
      const paymentId = query.id || query["data.id"];
      const payment = await mercadopago.payment.findById(paymentId);
      const idS = payment.data.map((e) => e.id);
      console.log("ids: ", idS);
      Payment.update(
        {
          date_approved: payment.data.date_approved,
          authorization_code: payment.data.authorization_code,
          mp_id_order: payment.data.order.id,
          fee_mp: payment.data.fee_details[0].amount,
          payment_status: payment.data.status,
        },
        {
          where: { id_payment: idS.replace(/["-]/g, "") },
        }
      )
        .then(() => {
          console.log(`Se actualizaron 5 registros`);
        })
        .catch((err) => {
          console.error("Error al actualizar registros:", err);
        });
  }
  res.send();
}

module.exports = { createPayment, paymentNotification };
