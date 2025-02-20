import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

const libroService = {
    async obtenerTodos() {
        const response = await axios.get(`${API_URL}/libros`);
        return response.data;
    },

    async obtenerPorId(id) {
        const response = await axios.get(`${API_URL}/libros/${id}`);
        return response.data;
    },

    async crear(libro) {
        const response = await axios.post(`${API_URL}/libros`, libro, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    },

    async actualizar(id, libro) {
        const response = await axios.put(`${API_URL}/libros/${id}`, libro, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    },

    async eliminar(id) {
        const response = await axios.delete(`${API_URL}/libros/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    },

    async buscar(titulo) {
        const response = await axios.get(`${API_URL}/libros/buscar?titulo=${titulo}`);
        return response.data;
    }
};

export default libroService;