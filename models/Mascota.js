const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Mascota = db.define(
  "Mascota",
  {
    nombre: { type: DataTypes.STRING },
    tipo: { type: DataTypes.STRING },
    edad: { type: DataTypes.INTEGER },
    peso: { type: DataTypes.FLOAT },
    fechaNacimiento: { type: DataTypes.DATE },
    vacunado: { type: DataTypes.BOOLEAN },
    descripcion: { type: DataTypes.TEXT },
  },
  { timestamps: false },
);

module.exports = Mascota;
