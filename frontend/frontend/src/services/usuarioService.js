import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

const usuarioService = {
    async obtenerPerfil() {
        const response = await axios.get(`${API_URL}/usuarios/perfil`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    },

    async actualizarPerfil(datos) {
        const response = await axios.put(`${API_URL}/usuarios/perfil`, datos, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    },

    async obtenerPrestamos() {
        const response = await axios.get(`${API_URL}/usuarios/prestamos`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    }
};

export default usuarioService;