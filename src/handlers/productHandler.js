const { getProductById} = require('../controllers/productControllers');

const getProductByIdHandler = async (req, res) => {
    const {id} = req.params;

    try {
        const wantedProduct = getProductById(id);

        if(!wantedProduct) throw new Error('Lo siento no existe un producto con ese id')
        res.status(200).json(wantedProduct)

    } catch (error) {
        res.status(404).json({error: error.message});
    }

};

module.exports = {getProductByIdHandler};