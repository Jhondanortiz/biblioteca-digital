INSERT INTO usuarios (nombre, email, password, rol) VALUES
('Admin', 'admin@biblioteca.com', '$2b$10$XKX.BqPj6QI6/ZoXqV2Cz.7G8K5O9K6yQ5yQ5Z5Z5Z5Z5Z5Z5Z', 'admin'),
('Usuario Demo', 'usuario@biblioteca.com', '$2b$10$XKX.BqPj6QI6/ZoXqV2Cz.7G8K6O9K6yQ5yQ5Z5Z5Z5Z5Z5Z5Z', 'usuario');

INSERT INTO libros (titulo, autor, isbn, categoria, cantidad_disponible) VALUES
('El Quijote', 'Miguel de Cervantes', '9788424922580', 'Clásico', 2),
('Cien años de soledad', 'Gabriel García Márquez', '9780307474728', 'Ficción', 3),
('El principito', 'Antoine de Saint-Exupéry', '9788478887199', 'Infantil', 5);