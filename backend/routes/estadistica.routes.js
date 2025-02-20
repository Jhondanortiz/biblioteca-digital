const router = require('express').Router();
const { autenticarToken } = require('../middleware/autenticacion.middleware');
const { esAdmin } = require('../middleware/autorizacion.middleware');

router.get('/prestamos/totales', autenticarToken, esAdmin, async (req, res) => {
    try {
        const [resultado] = await pool.query(
            'SELECT COUNT(*) as total FROM prestamos'
        );
        res.json(resultado[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/libros/populares', autenticarToken, async (req, res) => {
    try {
        const [resultado] = await pool.query(`
            SELECT l.titulo, COUNT(p.id) as prestamos
            FROM libros l
            LEFT JOIN prestamos p ON l.id = p.libro_id
            GROUP BY l.id
            ORDER BY prestamos DESC
            LIMIT 5
        `);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;