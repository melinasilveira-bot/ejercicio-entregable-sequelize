const express = require("express");
const db = require("./config/db");
const Cliente = require("./models/Cliente");
const Mascota = require("./models/Mascota");

const app = express();

// 1. Middlewares obligatorios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Relaciones entre tablas (¡Punto 7 de la consigna - 2 puntos extra!)
Cliente.hasMany(Mascota, { foreignKey: "DuenoId" });
Mascota.belongsTo(Cliente, { foreignKey: "DuenoId" });

// 3. Conexión a DB
db.authenticate()
  .then(() => {
    console.log("Conexión a MySQL exitosa.");
    return db.sync({ force: false });
  })
  .then(() => console.log("Tablas sincronizadas correctamente."))
  .catch((err) =>
    console.error("Error al conectar con la base de datos:", err),
  );

// 4. Rutas (Tus compañeras las conectarán aquí)
app.use("/clientes", require("./routes/clientesRoutes"));
// app.use('/mascotas', require('./routes/mascotasRoutes'));

// 5. Servidor escuchando en el puerto 8000
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Servidor de Veterinaria corriendo en http://localhost:${PORT}`);
});
