const express = require('express');
const router = express.Router();

const { getProducts, addProducts, updateProducts, deleteProducts } = require('../controllers/products');

router.route('/')
.get(getProducts)
.post(addProducts);

//localhost:3000/products/12 asi recibimos el ID
router.route('/:id')
.put(updateProducts)
.delete(deleteProducts);

module.exports = router;