const Prestamo = require('../models/prestamo.model');
const Libro = require('../models/libro.model');

const prestamoController = {
    async crearPrestamo(req, res) {
        try {
            const nuevoPrestamo = {
                ...req.body,
                fecha_prestamo: new Date(),
                estado: 'activo'
            };
            const prestamoId = await Prestamo.crear(nuevoPrestamo);
            await Libro.actualizarDisponibilidad(nuevoPrestamo.libro_id, -1);
            
            res.status(201).json({
                mensaje: 'Préstamo registrado exitosamente',
                id: prestamoId
            });
        } catch (error) {
            res.status(500).json({
                mensaje: 'Error al crear el préstamo',
                error: error.message
            });
        }
    },

    async obtenerPrestamos(req, res) {
        try {
            const prestamos = await Prestamo.obtenerTodos();
            res.json(prestamos);
        } catch (error) {
            res.status(500).json({
                mensaje: 'Error al obtener los préstamos',
                error: error.message
            });
        }
    },

    async obtenerPrestamosPorUsuario(req, res) {
        try {
            const usuarioId = req.params.usuarioId;
            const prestamos = await Prestamo.obtenerPorUsuario(usuarioId);
            res.json(prestamos);
        } catch (error) {
            res.status(500).json({
                mensaje: 'Error al obtener los préstamos del usuario',
                error: error.message
            });
        }
    },

    async registrarDevolucion(req, res) {
        try {
            const prestamoId = req.params.id;
            const prestamo = await Prestamo.obtenerPorId(prestamoId);
            
            if (!prestamo) {
                return res.status(404).json({
                    mensaje: 'Préstamo no encontrado'
                });
            }

            await Prestamo.registrarDevolucion(prestamoId);
            await Libro.actualizarDisponibilidad(prestamo.libro_id, 1);

            res.json({
                mensaje: 'Devolución registrada exitosamente'
            });
        } catch (error) {
            res.status(500).json({
                mensaje: 'Error al registrar la devolución',
                error: error.message
            });
        }
    },

    async obtenerPrestamosVencidos(req, res) {
        try {
            const prestamosVencidos = await Prestamo.obtenerPrestamosVencidos();
            res.json(prestamosVencidos);
        } catch (error) {
            res.status(500).json({
                mensaje: 'Error al obtener los préstamos vencidos',
                error: error.message
            });
        }
    }
};

module.exports = prestamoController;