import React, { useState, useEffect } from "react";

const PaginaPerfilUsuario = () => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    setUsuario({
      nombre: "Juan Pérez",
      email: "juanperez@example.com",
      preferencias: ["Ficción", "Historia", "Ciencia"]
    });
  }, []);

  if (!usuario) {
    return <p>Cargando perfil...</p>;
  }

  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <p><strong>Nombre:</strong> {usuario.nombre}</p>
      <p><strong>Email:</strong> {usuario.email}</p>
      <p><strong>Preferencias:</strong></p>
      <ul>
        {usuario.preferencias.map((pref, index) => (
          <li key={index}>{pref}</li>
        ))}
      </ul>
    </div>
  );
};

export default PaginaPerfilUsuario;
