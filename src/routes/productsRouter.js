const {Router} = require('express');
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const {CloudinaryStorage} = require("multer-storage-cloudinary");

const storageCloud = new CloudinaryStorage({
    cloudinary,
    folder: "/",
    allowed_formats: ["jpeg", "png", "jpg"],
});

const upload = multer({ storage: storageCloud});

const {getAllProducts, getProductByIdHandler, postProductHandler} = require('../handlers/productHandler');

const router = Router();

router.get('/:id', getProductByIdHandler);
router.get("/", getAllProducts);
router.post("/create", upload.single("image"), postProductHandler);

module.exports = router;