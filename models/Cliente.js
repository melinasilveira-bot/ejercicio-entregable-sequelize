const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Cliente = db.define(
  "Cliente",
  {
    nombre: { type: DataTypes.STRING },
    apellido: { type: DataTypes.STRING },
    edad: { type: DataTypes.INTEGER },
  },
  { timestamps: false },
);

module.exports = Cliente;
