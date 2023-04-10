const {Router} = require('express');
const { createProduct, updateProduct } = require('../controllers/product.controllers');
const { createProductValidator, updateProductValidator } = require('../validators/product.validators');
const router = Router();

router.post('/api/v1/product', createProductValidator, createProduct);
router.put('/api/v1/product/:id', updateProductValidator, updateProduct);

module.exports = router;