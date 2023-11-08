const {
  Payment,
  Purchase,
  User,
  Orderdetail,
  Product,
  Delivery,
} = require("../db");
const { onlyDateCheck } = require("../helpers/validation");

require("dotenv").config();
const { ACCESS_TOKEN, BACK_URL, BACK_URL_NOTIFICATION, PORT } = process.env;

const mercadopago = require("mercadopago");
const { updateProductQuantities } = require("./stockControllers");

//  Agrega credenciales
mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

const nodemailer = require('nodemailer');
const { EMAIL_USER, EMAIL_PASS } = process.env;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
      user: EMAIL_USER ,
      pass: EMAIL_PASS
  }
});

let idPaymentCreated;

let userData;
let cartDetail;
let purchaseData;

const createPayment = async (req, res, next) => {
  const { purchaseId } = req.body;
  const {cart} = req.body;
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
        success: BACK_URL,
        failure: BACK_URL,
        pending: BACK_URL,
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
      active: true, // Estado activo del pago
    });
    //console.log(" este es el newPayment :", newPayment);

    // Asociar el pago a la compra
    await purchase.update({ paymentId: newPayment.id });

    // console.log("esta es la order actualizada: ", order);
    await newPayment.update({
      purchaseId: purchase.id,
      userId: purchase.userId,
    });
    //console.log("este es el pago updated 1: ", newPayment);

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
    userData = user;
    cartDetail= cart;
    purchaseData= purchase

    //actualizo el campo purchase_history en user
    const currentPurchaseHistory = user.purchase_history;

    //revisar de ver si se puede poner el objeto completo

    const updatedPurchaseHistory = ordersDetail.map((o) => ({
      productId: o.productId,
      price: o.price,
      quantity: o.quantity,
      date: o.order_date,
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
      //console.log("Data body:", data.body);
      if (data.body.status === "rejected") {
        const rejectedPayment = await Payment.update(
          {
            date_approved: data.body.date_approved,
            mp_id_order: data.body.order.id,
            payment_status: "failed",
          },
          {
            where: {
              id: idPaymentCreated,
            },
          }
        );
        const failedPurchase = await Purchase.update(
          {
            purchase_status: "failed",
          },
          { where: { paymentId: idPaymentCreated } }
        );

        const updatedPurchaseInstance = await Purchase.findOne({
          where: { paymentId: idPaymentCreated },
        });
        const purchaseId = updatedPurchaseInstance.id;

        const updatedOrder = await Orderdetail.update(
          {
            order_status: "inactive",
          },
          { where: { purchaseId: purchaseId } }
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

        const callPurchase = await Purchase.findOne({
          where: { paymentId: idPaymentCreated },
        });
        console.log("callPurchase: ", callPurchase);

        const newDelivery = await Delivery.create({
          delivered_date: new Date(), // Fecha actual
          delivery_status: "delivered",
          purchaseId: callPurchase.id, // Utiliza el purchaseId del pago aprobado
          userId: callPurchase.userId, // Utiliza el userId del pago aprobado
        });

        const updatedPurchase = await Purchase.update(
          {
            purchase_status: "success",
            deliveryId: newDelivery.id,
          },
          { where: { paymentId: idPaymentCreated } }
        );

        // Llama al controlador para actualizar las cantidades de productos
        await updateProductQuantities(callPurchase.id);

        const content = 
          `<html>
            <body style="text-align: center;">
              <h1 style="color: black;">¡Gracias por tu compra, ${
                userData.first_name
              }!</h1>
              <p style="color: black;">Te agradecemos por tu reciente compra en Strings And Keys. Debajo puedes ver los detalles de tu compra:</p>
              <div>
                <table 
                  align="center"
                  style= "border : 1px solid black; width: fit-content; border-collapse: collapse ; margin-top: 20px ; margin-bottom: 20px;"
                >
                  
                  <tr>
                    <th
                      align="center"          
                      style= "border : 1px solid black; width: fit-content ; padding: 10px;"
                    >Cantidad</th>
                    <th
                      align="center"          
                      style= "border : 1px solid black; width: fit-content ; padding: 10px;"
                    >Producto</th>
                    <th
                      align="center"          
                      style= "border : 1px solid black; width: fit-content ; padding: 10px;"
                    >Importe</th>
                  </tr>
                  ${cartDetail.map(
                    (e) =>
                      `<tr>
                      <td
                        align="center"         
                        style= "border : 1px solid black; width: fit-content ; padding: 10px;"
                      >${e.quantity}</td>
                      <td
                        align="center"         
                        style= "border : 1px solid black; width: fit-content ; padding: 10px;"
                      >${e.name}</td>
                      <td
                        align="center"         
                        style= "border : 1px solid black; width: fit-content ; padding: 10px;" 
                      >$${e.price * e.quantity}</td>
                    </tr>`
                  )}
                  <tr>
                    <th
                        align="center"             
                        style= "border : 1px solid black; width: fit-content ; padding: 10px;"
                    >Total</th>
                    <td
                        align="center"
                        colspan="2"
                        style= "border : 1px solid black; width: fit-content ; padding: 10px;"
                    >$${purchaseData.totalprice}</td>
                  </tr>
                </table>
              </div>
              <img src="https://res.cloudinary.com/dhit7strk/image/upload/v1693428861/MAIL_p2qzg7.png" alt="Imagen de agradecimiento" style="display: block; margin: 0 auto;"/>
            </body>
          </html>`
      ;
      const mailOptions = {
        from: "stringsandkeysmusicstore@gmail.com",
        to: userData.email,
        subject: "Gracias por tu compra!",
        // text: contenido,
        html: content,
      };
  
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            throw new Error(error.message);
        } else {
            res.status(200).send("Email Sent" + info)
        }
      })
      }
    }
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json({ error: error.message });
  }
}

//!GET payments
const getAllPayments = async (req, res) => {
  try {
    const allPayments = await Payment.findAll({
      include: [{ model: Purchase }, { model: User }],
    });
    res.status(200).send(allPayments);
  } catch (e) {
    res.status(404).json(e);
  }
};

module.exports = { createPayment, paymentNotification, getAllPayments };
