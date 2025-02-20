const Libro = require('../models/libro.model');

const libroController = {
    async crearLibro(req, res) {
        try {
            const nuevoLibro = req.body;
            const libroId = await Libro.crear(nuevoLibro);
            res.status(201).json({
                mensaje: 'Libro creado exitosamente',
                id: libroId
            });
        } catch (error) {
            res.status(500).json({
                mensaje: 'Error al crear el libro',
                error: error.message
            });
        }
    },

    async obtenerLibros(req, res) {
        try {
            const libros = await Libro.obtenerTodos();
            res.json(libros);
        } catch (error) {
            res.status(500).json({
                mensaje: 'Error al obtener los libros',
                error: error.message
            });
        }
    },

    async obtenerLibroPorId(req, res) {
        try {
            const id = req.params.id;
            const libro = await Libro.obtenerPorId(id);
            if (libro) {
                res.json(libro);
            } else {
                res.status(404).json({
                    mensaje: 'Libro no encontrado'
                });
            }
        } catch (error) {
            res.status(500).json({
                mensaje: 'Error al obtener el libro',
                error: error.message
            });
        }
    },

    async actualizarLibro(req, res) {
        try {
            const id = req.params.id;
            const datosActualizados = req.body;
            const resultado = await Libro.actualizar(id, datosActualizados);
            if (resultado) {
                res.json({
                    mensaje: 'Libro actualizado exitosamente'
                });
            } else {
                res.status(404).json({
                    mensaje: 'Libro no encontrado'
                });
            }
        } catch (error) {
            res.status(500).json({
                mensaje: 'Error al actualizar el libro',
                error: error.message
            });
        }
    },

    async eliminarLibro(req, res) {
        try {
            const id = req.params.id;
            const resultado = await Libro.eliminar(id);
            if (resultado) {
                res.json({
                    mensaje: 'Libro eliminado exitosamente'
                });
            } else {
                res.status(404).json({
                    mensaje: 'Libro no encontrado'
                });
            }
        } catch (error) {
            res.status(500).json({
                mensaje: 'Error al eliminar el libro',
                error: error.message
            });
        }
    },

    async buscarLibros(req, res) {
        try {
            const { titulo } = req.query;
            const libros = await Libro.buscarPorTitulo(titulo);
            res.json(libros);
        } catch (error) {
            res.status(500).json({
                mensaje: 'Error al buscar libros',
                error: error.message
            });
        }
    }
};

module.exports = libroController;