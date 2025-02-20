const validarAdmin = (req, res, next) => {
    if (req.usuario && req.usuario.rol === 'admin') {
        next();
    } else {
        res.status(403).json({ mensaje: 'Acceso denegado. Se requieren permisos de administrador.' });
    }
};