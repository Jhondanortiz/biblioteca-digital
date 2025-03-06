import React from "react";

/**
 * Componente de carga para mostrar mientras se cargan los componentes lazy
 * Mejora la experiencia de usuario durante la carga de módulos
 * @returns {React.ReactElement} Componente de carga
 */
const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Cargando...</p>
    </div>
  );
};

export default LoadingSpinner;