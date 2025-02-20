import React from "react";
import { Link } from "react-router-dom";
import "./PaginaInicio.css"; // Archivo de estilos

const PaginaInicio = () => {
  return (
    <div className="pagina-inicio">
      {/* Barra de navegación */}
      <nav className="navbar">
        <h2>Biblioteca Digital</h2>
        <div className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/login">Iniciar Sesión</Link>
          <Link to="/registro">Registrarse</Link>
        </div>
      </nav>

      {/* Contenido principal */}
      <header className="header">
        <h1>Bienvenido a la Biblioteca Digital</h1>
        <p>Explora nuestro catálogo y disfruta de una amplia selección de libros.</p>
        <Link to="/catalogo" className="btn-explorar">Explorar</Link>
      </header>

      {/* Sección de libros destacados */}
      <section className="destacados">
        <h2>Libros Populares</h2>
        <div className="libros">
          <div className="libro">
            <img src="https://via.placeholder.com/150" alt="Libro 1" />
            <p>El Principito</p>
          </div>
          <div className="libro">
            <img src="https://via.placeholder.com/150" alt="Libro 2" />
            <p>Cien años de soledad</p>
          </div>
          <div className="libro">
            <img src="https://via.placeholder.com/150" alt="Libro 3" />
            <p>1984</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaginaInicio;
