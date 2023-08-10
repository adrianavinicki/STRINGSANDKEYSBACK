const { Product } = require("../db");
const listProducts = require("../data/MusicProducts.js");
require("dotenv").config();
const { Op } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

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

module.exports = {
  getProductById,
  loadProductsInDB,
  getProducts,
  getProductByName,
};
