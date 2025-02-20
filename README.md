# Biblioteca Digital

Sistema de gestión de biblioteca digital desarrollado con Node.js y React.

## Requisitos Previos

- Node.js (v14 o superior)
- MySQL (v8 o superior)
- npm o yarn

## Estructura del Proyecto

```
biblioteca-digital/
├── backend/                # Servidor Node.js + Express
│   ├── controllers/       # Controladores de la aplicación
│   ├── models/           # Modelos de datos
│   ├── routes/           # Rutas de la API
│   ├── middleware/       # Middleware personalizado
│   └── database/         # Scripts SQL y configuración de BD
├── frontend/             # Cliente React
│   ├── src/
│   │   ├── components/  # Componentes React reutilizables
│   │   ├── pages/      # Páginas principales
│   │   └── services/   # Servicios para llamadas API
└── README.md
```

## Instalación

1. Clonar el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd biblioteca-digital
```

2. Instalar dependencias del backend:
```bash
cd backend
npm install
```

3. Instalar dependencias del frontend:
```bash
cd frontend
npm install
```

4. Configurar la base de datos:
- Crear una base de datos MySQL
- Copiar `.env.example` a `.env` y configurar las variables de entorno
- Ejecutar los scripts SQL en la carpeta `database/scripts_sql/`

## Configuración

Crear un archivo `.env` en la carpeta backend con:

```
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_NAME=biblioteca_digital
JWT_SECRET=tu_secreto_jwt
PORT=3001
```

## Ejecución

1. Iniciar el backend:
```bash
cd backend
npm start
```

2. Iniciar el frontend:
```bash
cd frontend
npm start
```

El servidor backend estará disponible en `http://localhost:3001`
La aplicación frontend estará disponible en `http://localhost:3000`

## Características

- Gestión de usuarios (registro, login, roles)
- Catálogo de libros
- Sistema de préstamos
- Panel de administración
- Búsqueda y filtrado de libros
- Reportes y estadísticas

## Licencia

MIT

## Contacto

[Tu nombre o equipo]
[Información de contacto]