import React, { useState } from 'react';

const BarraBusqueda = ({ onBuscar }) => {
    const [busqueda, setBusqueda] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onBuscar(busqueda);
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Buscar libros..."
                className="px-4 py-2 border rounded"
            />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                Buscar
            </button>
        </form>
    );
};

export default BarraBusqueda;