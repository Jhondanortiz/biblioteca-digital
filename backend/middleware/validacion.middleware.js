const { body, validationResult } = require('express-validator');

const validarUsuario = [
    body('email').isEmail().withMessage('Email inválido'),
    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    body('nombre').notEmpty().withMessage('El nombre es requerido'),
    (req, res, next) => {
        const errores = validationResult(req);
        if (!errores.isEmpty()) {
            return res.status(400).json({ errores: errores.array() });
        }
        next();
    }
];

const validarLibro = [
    body('titulo').notEmpty().withMessage('El título es requerido'),
    body('autor').notEmpty().withMessage('El autor es requerido'),
    body('isbn').isLength({ min: 10 }).withMessage('ISBN inválido'),
    (req, res, next) => {
        const errores = validationResult(req);
        if (!errores.isEmpty()) {
            return res.status(400).json({ errores: errores.array() });
        }
        next();
    }
];