const db = require('./conexion.model');

class Libro {
    constructor(libro) {
        this.id = libro.id;
        this.titulo = libro.titulo;
        this.autor = libro.autor;
        this.isbn = libro.isbn;
        this.categoria = libro.categoria;
        this.cantidad_disponible = libro.cantidad_disponible;
        this.ubicacion = libro.ubicacion;
    }

    static async crear(nuevoLibro) {
        const query = 'INSERT INTO libros SET ?';
        const result = await db.query(query, nuevoLibro);
        return result.insertId;
    }

    static async obtenerTodos() {
        const query = 'SELECT * FROM libros';
        const [libros] = await db.query(query);
        return libros;
    }

    static async obtenerPorId(id) {
        const query = 'SELECT * FROM libros WHERE id = ?';
        const [libros] = await db.query(query, [id]);
        return libros[0];
    }

    static async actualizar(id, libro) {
        const query = 'UPDATE libros SET ? WHERE id = ?';
        const result = await db.query(query, [libro, id]);
        return result.affectedRows;
    }

    static async eliminar(id) {
        const query = 'DELETE FROM libros WHERE id = ?';
        const result = await db.query(query, [id]);
        return result.affectedRows;
    }

    static async buscarPorTitulo(titulo) {
        const query = 'SELECT * FROM libros WHERE titulo LIKE ?';
        const [libros] = await db.query(query, [`%${titulo}%`]);
        return libros;
    }

    static async actualizarDisponibilidad(id, cantidad) {
        const query = 'UPDATE libros SET cantidad_disponible = cantidad_disponible + ? WHERE id = ?';
        const result = await db.query(query, [cantidad, id]);
        return result.affectedRows;
    }
}

module.exports = Libro;