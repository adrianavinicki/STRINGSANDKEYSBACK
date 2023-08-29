const { Router } = require("express");
const { createRatingHandler, getRatingsHandler, getRatingByIdHandler, ratingsAverageHandler, getRatingsByUserHandler } = require("../handlers/ratingsHandler");

const router = Router();

router.post('/create', createRatingHandler);
router.get('/', getRatingsHandler);
router.get('/product/:productId', getRatingByIdHandler);
router.get('/average', ratingsAverageHandler);
router.get('/user/:userId', getRatingsByUserHandler);

module.exports = router;