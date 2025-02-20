import React, { useState } from 'react';
import prestamoService from '../services/prestamoService';

const FormularioPrestamo = ({ libroId, onPrestamoRealizado }) => {
    const [fechaDevolucion, setFechaDevolucion] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await prestamoService.crear({
                libro_id: libroId,
                fecha_devolucion_esperada: fechaDevolucion
            });
            onPrestamoRealizado();
        } catch (error) {
            setError('Error al realizar el préstamo');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md">
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                    Fecha de devolución
                </label>
                <input
                    type="date"
                    value={fechaDevolucion}
                    onChange={(e) => setFechaDevolucion(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    required
                    min={new Date().toISOString().split('T')[0]}
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                disabled={loading}
            >
                {loading ? 'Procesando...' : 'Realizar Préstamo'}
            </button>
        </form>
    );
};

export default FormularioPrestamo;