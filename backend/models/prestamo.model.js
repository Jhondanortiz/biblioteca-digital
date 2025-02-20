const db = require('./conexion.model');

class Prestamo {
    constructor(prestamo) {
        this.id = prestamo.id;
        this.usuario_id = prestamo.usuario_id;
        this.libro_id = prestamo.libro_id;
        this.fecha_prestamo = prestamo.fecha_prestamo;
        this.fecha_devolucion_esperada = prestamo.fecha_devolucion_esperada;
        this.fecha_devolucion_real = prestamo.fecha_devolucion_real;
        this.estado = prestamo.estado; // 'activo', 'devuelto', 'vencido'
    }

    static async crear(nuevoPrestamo) {
        const query = 'INSERT INTO prestamos SET ?';
        const result = await db.query(query, nuevoPrestamo);
        return result.insertId;
    }

    static async obtenerTodos() {
        const query = `
            SELECT p.*, u.nombre as nombre_usuario, l.titulo as titulo_libro 
            FROM prestamos p 
            JOIN usuarios u ON p.usuario_id = u.id 
            JOIN libros l ON p.libro_id = l.id
        `;
        const [prestamos] = await db.query(query);
        return prestamos;
    }

    static async obtenerPorUsuario(usuarioId) {
        const query = `
            SELECT p.*, l.titulo as titulo_libro 
            FROM prestamos p 
            JOIN libros l ON p.libro_id = l.id 
            WHERE p.usuario_id = ?
        `;
        const [prestamos] = await db.query(query, [usuarioId]);
        return prestamos;
    }

    static async obtenerPorId(id) {
        const query = `
            SELECT p.*, u.nombre as nombre_usuario, l.titulo as titulo_libro 
            FROM prestamos p 
            JOIN usuarios u ON p.usuario_id = u.id 
            JOIN libros l ON p.libro_id = l.id 
            WHERE p.id = ?
        `;
        const [prestamos] = await db.query(query, [id]);
        return prestamos[0];
    }

    static async registrarDevolucion(id) {
        const query = `
            UPDATE prestamos 
            SET estado = 'devuelto', 
                fecha_devolucion_real = CURRENT_TIMESTAMP 
            WHERE id = ?
        `;
        const result = await db.query(query, [id]);
        return result.affectedRows;
    }

    static async actualizarEstado(id, estado) {
        const query = 'UPDATE prestamos SET estado = ? WHERE id = ?';
        const result = await db.query(query, [estado, id]);
        return result.affectedRows;
    }

    static async obtenerPrestamosVencidos() {
        const query = `
            SELECT p.*, u.nombre as nombre_usuario, l.titulo as titulo_libro 
            FROM prestamos p 
            JOIN usuarios u ON p.usuario_id = u.id 
            JOIN libros l ON p.libro_id = l.id 
            WHERE p.fecha_devolucion_esperada < CURRENT_DATE 
            AND p.estado = 'activo'
        `;
        const [prestamos] = await db.query(query);
        return prestamos;
    }
}

module.exports = Prestamo;