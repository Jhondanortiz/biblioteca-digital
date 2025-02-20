const pool = require('./conexion.model');
const bcrypt = require('bcryptjs');

class UsuarioModel {
    async crear(usuario) {
        const hashedPassword = await bcrypt.hash(usuario.password, 10);
        const [resultado] = await pool.query(
            'INSERT INTO usuarios (nombre, email, password_hash, rol) VALUES (?, ?, ?, ?)',
            [usuario.nombre, usuario.email, hashedPassword, usuario.rol || 'lector']
        );
        return resultado.insertId;
    }

    async buscarPorEmail(email) {
        const [usuarios] = await pool.query(
            'SELECT * FROM usuarios WHERE email = ?',
            [email]
        );
        return usuarios[0];
    }

    async validarPassword(usuario, password) {
        return await bcrypt.compare(password, usuario.password_hash);
    }

    async listar() {
        const [usuarios] = await pool.query('SELECT id, nombre, email, rol, fecha_registro FROM usuarios');
        return usuarios;
    }
}

module.exports = new UsuarioModel();