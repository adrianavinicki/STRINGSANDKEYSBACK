const { Product } = require("../db");
const listProducts = require("../data/MusicProducts.js");
require("dotenv").config();
const { Op } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key:CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET
})

//!-------------

const getProducts = async () => {
  return await Product.findAll();
};

const loadProductsInDB = async (req, res, next) => {
  const fillProductDb = await Product.bulkCreate(listProducts.map((p) => p));
  if (!fillProductDb) {
    throw new Error("Error loading the products ");
  } else {
    {
      console.log("Products successfully loaded");
    }
  }
};

const getProductByName = async (name) => {
  try {
    let productName = await Product.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    return productName;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getProductById = async (id) => {
  const product = await Product.findByPk(id);
  return product;
};

//-----post------//

const postProduct = async(data) => {


  try {
    //let imagen = null;
//
    //if(data.imageFile) {
    //  const showImagen = await cloudinary.uploader.upload(data.imageFile.path, {public_id: data.name});
//
    //  imagen = showImagen.secure_url;
//
    //  
    //};

    const newProduct = await Product.create({
      name: data.name,
      brand: data.brand,
      category: data.category,
      description: data.description,
      quantity: data.quantity,
      price: data.price,
      image: data.imagen  
    });

    return newProduct;

  } catch (error) {
    throw new Error(error.message);
  }
}


const putProduct = async (req, res, next) => {
  const {
    name,
    brand,
    category,
    description,
    quantity,
    price,
    image,
    product_status,
  } = req.body;
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) res.status(404).json({ message: "Product does not exist" });
    const productModified = await product.update({
      name,
      brand,
      category,
      description,
      quantity,
      price,
      image,
      product_status,
    });
    if (productModified) res.status(201).json({ message: "Product modified" });
  } catch (error) {
    res.status(404).json(error.message);
  }
};


module.exports = {
  getProductById,
  loadProductsInDB,
  getProducts,
  getProductByName,
  postProduct,
  putProduct,
};
