import React from 'react';
import { Link } from 'react-router-dom';

const ListaLibros = ({ libros }) => {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
            {libros.map(libro => (
                <div key={libro.id} className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-xl font-bold mb-2">{libro.titulo}</h3>
                    <p className="text-gray-600 mb-4">Por: {libro.autor}</p>
                    <div className="mb-4">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                            {libro.categoria}
                        </span>
                        <span className={`${libro.cantidad_disponible > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} text-sm font-medium px-2.5 py-0.5 rounded`}>
                            {libro.cantidad_disponible} disponibles
                        </span>
                    </div>
                    <Link 
                        to={`/libros/${libro.id}`}
                        className="text-blue-600 hover:text-blue-800"
                    >
                        Ver detalles
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ListaLibros;