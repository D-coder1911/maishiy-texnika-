const { Router } = require('express');
const {getAllProducts, makeNew} = require('../controller/product.controller');

const productRouter = Router();

productRouter.get('/products ', getAllProducts);

module.exports = productRouter;

productRouter
.get('/products', getAllProducts)
.post('/products', makeNew);

module.exports = productRouter;