const express = require('express');
const router = express.Router();

const { getUsuarios, addUsuarios, updateUsuarios, deleteUsuarios } = require('../controllers/usuarios');

router.route('/')
.get(getUsuarios) // listar los datos y mostrar en pantalla (base de datos nos devuelve los datos para mostrarlo en pantalla)
.post(addUsuarios); // recibir los datos y agregarlos (guarda dentro de la base de datos)

//localhost:3000/usuarios/12 asi recibimos el ID
router.route('/:id')
.put(updateUsuarios)
.delete(deleteUsuarios);

module.exports = router;