const express = require('express');
const router = express.Router();

const { getProducts, addProducts, updateProducts, deleteProducts } = require('../controllers/products');

router.route('/')
.get(getProducts) // listar los datos y mostrar en pantalla (base de datos nos devuelve los datos para mostrarlo en pantalla)
.post(addProducts); // recibir los datos y agregarlos (guarda dentro de la base de datos)

//localhost:3000/products/12 asi recibimos el ID
router.route('/:id')
.put(updateProducts)
.delete(deleteProducts);

module.exports = router;