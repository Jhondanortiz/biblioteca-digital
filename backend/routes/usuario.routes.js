const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');
const { verificarToken, esAdmin } = require('../middleware/autenticacion.middleware');

// Rutas públicas
router.post('/registro', usuarioController.registro);
router.post('/login', usuarioController.login);

// Rutas protegidas
router.get('/perfil', verificarToken, usuarioController.obtenerPerfil);
router.put('/perfil', verificarToken, usuarioController.actualizarPerfil);

// Rutas de administrador
router.get('/usuarios', verificarToken, esAdmin, usuarioController.listarUsuarios);
router.delete('/usuarios/:id', verificarToken, esAdmin, usuarioController.eliminarUsuario);

module.exports = router;