import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

const autenticacionService = {
    async login(credentials) {
        const response = await axios.post(`${API_URL}/auth/login`, credentials);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('usuario', JSON.stringify(response.data.usuario));
        }
        return response.data;
    },

    async registro(userData) {
        const response = await axios.post(`${API_URL}/auth/registro`, userData);
        return response.data;
    },

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
    },

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('usuario'));
    },

    isAuthenticated() {
        return !!localStorage.getItem('token');
    }
};

export default autenticacionService;