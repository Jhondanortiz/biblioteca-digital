const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libro.controller');
const { autenticarToken } = require('../middleware/autenticacion.middleware');
const { validarAdmin } = require('../middleware/autorizacion.middleware');

// Rutas públicas
router.get('/buscar', libroController.buscarLibros);
router.get('/', libroController.obtenerLibros);
router.get('/:id', libroController.obtenerLibroPorId);

// Rutas protegidas (solo admin)
router.post('/', [autenticarToken, validarAdmin], libroController.crearLibro);
router.put('/:id', [autenticarToken, validarAdmin], libroController.actualizarLibro);
router.delete('/:id', [autenticarToken, validarAdmin], libroController.eliminarLibro);

module.exports = router;