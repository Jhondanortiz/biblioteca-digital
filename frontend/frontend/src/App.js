import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importación de páginas
import PaginaInicio from "./pages/PaginaInicio";
import PaginaLogin from "./pages/PaginaLogin";
import PaginaRegistro from "./pages/PaginaRegistro";
import PaginaCatalogo from "./pages/PaginaCatalogo";
import PaginaPerfilUsuario from "./pages/PaginaPerfilUsuario";
import PaginaAdministracion from "./pages/PaginaAdministracion";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas de la aplicación */}
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/login" element={<PaginaLogin />} />
        <Route path="/registro" element={<PaginaRegistro />} />
        <Route path="/catalogo" element={<PaginaCatalogo />} />
        <Route path="/perfil" element={<PaginaPerfilUsuario />} />
        <Route path="/admin" element={<PaginaAdministracion />} />
      </Routes>
    </Router>
  );
};

export default App;
