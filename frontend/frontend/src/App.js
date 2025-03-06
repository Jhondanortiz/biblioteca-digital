import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Importación de componentes para manejo de errores y carga
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingSpinner from "./components/LoadingSpinner";

// Importación de páginas con lazy loading
const PaginaInicio = lazy(() => import("./pages/PaginaInicio"));
const PaginaLogin = lazy(() => import("./pages/PaginaLogin"));
const PaginaRegistro = lazy(() => import("./pages/PaginaRegistro"));
const PaginaCatalogo = lazy(() => import("./pages/PaginaCatalogo"));
const PaginaPerfilUsuario = lazy(() => import("./pages/PaginaPerfilUsuario"));
const PaginaAdministracion = lazy(() => import("./pages/PaginaAdministracion"));
const PaginaNoEncontrada = lazy(() => import("./pages/PaginaNoEncontrada"));

/**
 * Componente principal de la aplicación que configura las rutas
 * Implementa lazy loading para mejorar el rendimiento
 * y ErrorBoundary para manejar errores de forma elegante
 * @returns {React.ReactElement} El componente de la aplicación
 */
const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Rutas de la aplicación */}
            <Route path="/" element={<PaginaInicio />} />
            <Route path="/login" element={<PaginaLogin />} />
            <Route path="/registro" element={<PaginaRegistro />} />
            <Route path="/catalogo" element={<PaginaCatalogo />} />
            <Route path="/perfil" element={<PaginaPerfilUsuario />} />
            <Route path="/admin" element={<PaginaAdministracion />} />
            
            {/* Manejo de rutas no encontradas */}
            <Route path="/404" element={<PaginaNoEncontrada />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
