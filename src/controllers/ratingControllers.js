const {Rating, Product, User} = require('../db.js');
const {conn} = require('../db.js');


const createRating = async (userId, productId, rate, review) => {
    const rating = await Rating.create({
        rate,
        userId,
        productId,
        review,
    });

    return rating;
};

const getAllRatings = async () => {
    const allRatings = await Rating.findAll()

    return allRatings;
};

// router.get("/product/:productId", async (req, res, next) => {
//     const { productId } = req.params;
  
//     try {
//       const rating = await Rating.findAll({
//         where: {
//           productId,
//         },
//         include: [
//           {
//             model: Product,
//             attributes: ["id"],
//           },
//           {
//             model: User,
//             attributes: ["first_name", "id"],
//           },
//         ],
//       });
//       // const result = rating.map((rating) => {
//       //   return {
//       //     id: rating.id,
//       //     productId: rating.productId,
//       //     rate: rating.rate,
//       //     review: rating.review,
//       //     userId: rating.userId,
//       //   };
//       // });
//       if (rating) {
//         res.json(rating);
//       } else {
//         res.send("No matches were found");
//       }
//     } catch (e) {
//       next(e);
//     }
//   }); 

const getRatingsById = async (productId) => {
  const rating = await Rating.findAll({
    where: {
      productId,
    },
    include: [
      {
        model: Product,
        attributes: ["id"],
      },
      {
        model: User,
        attributes: ["first_name", "id"],
      },
    ],
  });

  return rating;
};

const getRatingsAverage = async () => {
    const averages = await Rating.findAll({
        attributes: [
            "productId",
            [conn.fn("AVG", conn.col("rate")), "averageRate"],
        ],
        group: ["productId"],
    });

  return averages;
};

const getRatingsByUser = async (userId) => {
  const ratings = await Rating.findAll({
    where: {
      userId,
    },
    include: [
      {
        model: Product,
        attributes: ["id"],
      },
      {
        model: User,
        attributes: ["first_name", "id"],
      },
    ],
  });

  const result = ratings.map((rating) => {
    return {
      id: rating.rating_id,
      productId: rating.productId,
      rate: rating.rate,
      review: rating.review,
      userId: rating.userId,
    };
  });
  
  return result;
  
};

module.exports = {createRating, getAllRatings, getRatingsById, getRatingsAverage, getRatingsByUser};