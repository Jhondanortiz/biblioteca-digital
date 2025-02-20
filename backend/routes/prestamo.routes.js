const express = require('express');
const router = express.Router();
const prestamoController = require('../controllers/prestamo.controller');
const { autenticarToken } = require('../middleware/autenticacion.middleware');
const { validarAdmin } = require('../middleware/autorizacion.middleware');

// Rutas protegidas (requieren autenticación)
router.use(autenticarToken);

// Rutas para usuarios normales
router.get('/usuario/:usuarioId', prestamoController.obtenerPrestamosPorUsuario);

// Rutas para administradores
router.get('/', validarAdmin, prestamoController.obtenerPrestamos);
router.post('/', validarAdmin, prestamoController.crearPrestamo);
router.post('/:id/devolucion', validarAdmin, prestamoController.registrarDevolucion);
router.get('/vencidos', validarAdmin, prestamoController.obtenerPrestamosVencidos);

module.exports = router;