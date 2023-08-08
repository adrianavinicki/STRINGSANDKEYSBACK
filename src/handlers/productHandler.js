const {
  getProducts,
  getProductById,
} = require("../controllers/productControllers");

const getAllProducts = async (req, res) => {
  const response = await getProducts();

  try {
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProductByIdHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const wantedProduct = await getProductById(id);

    if (!wantedProduct)
      throw new Error("Lo siento no existe un producto con ese id");
    res.status(200).json(wantedProduct);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductByIdHandler,
};
