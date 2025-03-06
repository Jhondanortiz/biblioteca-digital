const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Deshabilitar la cabecera "X-Powered-By" para ocultar información sobre el servidor
app.disable("x-powered-by");

// Middleware para eliminar la cabecera "Server"
app.use((req, res, next) => {
  res.removeHeader("Server");
  next();
});

// Configurar Helmet para aplicar medidas de seguridad HTTP
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "trusted-cdn.com"], // Ajusta según necesidad
        objectSrc: ["'none'"],
        upgradeInsecureRequests: [],
      },
    },
    frameguard: { action: "deny" }, // Protección Anti-Clickjacking
    xssFilter: true, // Protección contra ataques XSS
    noSniff: true, // Evita que los navegadores intenten deducir tipos MIME
    hidePoweredBy: true, // Oculta la cabecera "X-Powered-By"
    hsts: { maxAge: 31536000, includeSubDomains: true, preload: true }, // Fuerza HTTPS
    referrerPolicy: { policy: "no-referrer" }, // Control de información en el Referer
    dnsPrefetchControl: { allow: false }, // Evita la pre-carga de DNS
    expectCt: { maxAge: 86400, enforce: true }, // Protección contra certificados TLS incorrectos
  })
);

// Configurar CORS solo si se necesita
app.use(
  cors({
    origin: "https://tudominio.com", // Restringe los dominios permitidos
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware para analizar solicitudes JSON
app.use(express.json());

// Ruta de prueba para verificar que el servidor funciona
app.get("/", (req, res) => {
  res.send("Servidor con Helmet y CORS funcionando correctamente.");
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log("Servidor iniciado correctamente.");
});
