const Product = require("../models/product.model");

class productServices {
    static async create(product) {
        try {
            const newProduct = await Product.create(product);
            return newProduct;
        } catch (error) {
            throw error;   
        }
    }

    static async update(id, body) {
        try {
            await Product.update(body, { where: {id} });
        } catch (error) {
            throw error
        }
    }

}

module.exports = productServices;
