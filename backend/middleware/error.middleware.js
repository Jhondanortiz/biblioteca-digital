const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        mensaje: 'Error interno del servidor',
        error: process.env.NODE_ENV === 'development' ? err.message : {}
    });
};

module.exports = {
    validarAdmin,
    validarUsuario,
    validarLibro,
    errorHandler
};