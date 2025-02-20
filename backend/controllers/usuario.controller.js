const usuarioModel = require('../models/usuario.model');
const jwt = require('jsonwebtoken');

class UsuarioController {
    async registro(req, res) {
        try {
            const { nombre, email, password, rol } = req.body;

            // Validar datos
            if (!nombre || !email || !password) {
                return res.status(400).json({ mensaje: 'Todos los campos son requeridos' });
            }

            // Verificar si el usuario ya existe
            const usuarioExistente = await usuarioModel.buscarPorEmail(email);
            if (usuarioExistente) {
                return res.status(400).json({ mensaje: 'El email ya está registrado' });
            }

            // Crear usuario
            const usuarioId = await usuarioModel.crear({ nombre, email, password, rol });

            res.status(201).json({
                mensaje: 'Usuario registrado exitosamente',
                usuarioId
            });
        } catch (error) {
            console.error('Error en registro:', error);
            res.status(500).json({ mensaje: 'Error al registrar usuario' });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;

            // Validar datos
            if (!email || !password) {
                return res.status(400).json({ mensaje: 'Email y contraseña son requeridos' });
            }

            // Buscar usuario
            const usuario = await usuarioModel.buscarPorEmail(email);
            if (!usuario) {
                return res.status(401).json({ mensaje: 'Credenciales inválidas' });
            }

            // Validar contraseña
            const passwordValida = await usuarioModel.validarPassword(usuario, password);
            if (!passwordValida) {
                return res.status(401).json({ mensaje: 'Credenciales inválidas' });
            }

            // Generar token
            const token = jwt.sign(
                { 
                    id: usuario.id, 
                    email: usuario.email,
                    rol: usuario.rol 
                },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            res.json({
                mensaje: 'Login exitoso',
                token,
                usuario: {
                    id: usuario.id,
                    nombre: usuario.nombre,
                    email: usuario.email,
                    rol: usuario.rol
                }
            });
        } catch (error) {
            console.error('Error en login:', error);
            res.status(500).json({ mensaje: 'Error en el servidor' });
        }
    }
}

module.exports = new UsuarioController();