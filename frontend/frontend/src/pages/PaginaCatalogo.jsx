import React, { useState, useEffect } from "react";

const PaginaCatalogo = () => {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    setLibros([
      { id: 1, titulo: "El Principito", autor: "Antoine de Saint-Exupéry" },
      { id: 2, titulo: "1984", autor: "George Orwell" },
      { id: 3, titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    ]);
  }, []);

  return (
    <div>
      <h2>Catálogo de Libros</h2>
      <ul>
        {libros.map((libro) => (
          <li key={libro.id}>
            <strong>{libro.titulo}</strong> - {libro.autor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaginaCatalogo;
