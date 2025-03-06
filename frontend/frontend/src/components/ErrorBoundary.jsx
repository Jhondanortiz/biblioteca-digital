import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * Componente para capturar y manejar errores en los componentes hijo
 * Incrementa la fiabilidad (ISO 25024) al prevenir que la aplicación
 * se bloquee completamente cuando ocurre un error
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError() {
    // Actualiza el estado para que el siguiente renderizado muestre la UI alternativa
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Puedes registrar el error en un servicio de informes de errores
    console.error("Error capturado por ErrorBoundary:", error, errorInfo);
    this.setState({ errorInfo });
    
    // Aquí podrías implementar un servicio para registrar errores
    // logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h2>Algo salió mal.</h2>
          <p>Por favor, intenta recargar la página o vuelve a la página de inicio.</p>
          <button 
            onClick={() => window.location.href = "/"} 
            className="error-button"
          >
            Volver al inicio
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;