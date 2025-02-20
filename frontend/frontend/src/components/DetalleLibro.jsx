import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import libroService from '../services/libroService';
import FormularioPrestamo from './FormularioPrestamo';
import autenticacionService from '../services/autenticacionService';

const DetalleLibro = () => {
    const { id } = useParams();
    const [libro, setLibro] = useState(null);
    const [loading, setLoading] = useState(true);
    const usuario = autenticacionService.getCurrentUser();

    useEffect(() => {
        cargarLibro();
    }, [id]);

    const cargarLibro = async () => {
        try {
            const data = await libroService.obtenerPorId(id);
            setLibro(data);
        } catch (error) {
            console.error('Error al cargar el libro:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Cargando...</div>;
    if (!libro) return <div>Libro no encontrado</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold mb-4">{libro.titulo}</h1>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-gray-600 mb-2">Autor: {libro.autor}</p>
                        <p className="text-gray-600 mb-2">ISBN: {libro.isbn}</p>
                        <p className="text-gray-600 mb-2">Categoría: {libro.categoria}</p>
                        <p className="text-gray-600 mb-4">
                            Disponibilidad: {libro.cantidad_disponible} unidades
                        </p>
                        {usuario && libro.cantidad_disponible > 0 && (
                            <div className="mt-6">
                                <h2 className="text-xl font-bold mb-4">Realizar Préstamo</h2>
                                <FormularioPrestamo 
                                    libroId={libro.id} 
                                    onPrestamoRealizado={cargarLibro}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetalleLibro;