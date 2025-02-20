import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

const prestamoService = {
    async obtenerTodos() {
        const response = await axios.get(`${API_URL}/prestamos`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    },

    async obtenerPorUsuario(usuarioId) {
        const response = await axios.get(`${API_URL}/prestamos/usuario/${usuarioId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    },

    async crear(prestamo) {
        const response = await axios.post(`${API_URL}/prestamos`, prestamo, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    },

    async registrarDevolucion(prestamoId) {
        const response = await axios.post(`${API_URL}/prestamos/${prestamoId}/devolucion`, {}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    },

    async obtenerVencidos() {
        const response = await axios.get(`${API_URL}/prestamos/vencidos`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    }
};

export default prestamoService;