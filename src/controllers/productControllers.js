const { Product } = require("../db");


const getProducts = async () => {
    return await Product.findAll();
  };