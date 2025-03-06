import React from 'react';

const PaginaNoEncontrada = () => {
  return (
    <div className="container">
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <button onClick={() => window.location.href = "/"}>
        Volver al inicio
      </button>
    </div>
  );
};

export default PaginaNoEncontrada;