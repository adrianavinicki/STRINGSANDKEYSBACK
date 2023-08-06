const { Product } = require("../db");


const getProducts = async () => {
    return await Product.findAll();
  };

  const getProductById = async (id) => {
    const product = await Product.findByPK(id);
    return product;
  };
  
  
  module.exports = {
    getProductById,
  };  