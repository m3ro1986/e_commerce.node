const productServices = require("../services/product.services");

const createProduct = async (req, res, next) => {
    try {
        const product = req.body;
        const newProduct = await productServices.create(product);
        res.json(newProduct);
    } catch (error) {
        next(error);
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const {id} = req.params;
        const { description } = req.body;
        await productServices.update(id, {description});
        res.status(202).json(`product ${id} successfully modified`)
    } catch (error) {
        next(error)
    }
}

module.exports = { createProduct, updateProduct };