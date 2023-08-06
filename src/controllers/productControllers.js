const { Product } = require("../db");
const listProducts = require("../data/MusicProducts.js");

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

const getProductById = async (id) => {
  const product = await Product.findByPK(id);
  return product;
};

module.exports = {
  getProductById,
  loadProductsInDB,
  getProducts
};
