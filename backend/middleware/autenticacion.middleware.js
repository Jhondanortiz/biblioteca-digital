const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        
        if (!token) {
            return res.status(401).json({ mensaje: 'No se proporcionó token de acceso' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ mensaje: 'Token inválido' });
    }
};

const esAdmin = (req, res, next) => {
    if (req.usuario.rol !== 'administrador') {
        return res.status(403).json({ mensaje: 'Acceso denegado' });
    }
    next();
};

const esBibliotecario = (req, res, next) => {
    if (!['administrador', 'bibliotecario'].includes(req.usuario.rol)) {
        return res.status(403).json({ mensaje: 'Acceso denegado' });
    }
    next();
};

module.exports = { 
    verificarToken, 
    esAdmin, 
    esBibliotecario 
};