const { Sequelize } = require("sequelize");

const db = new Sequelize("veterinaria_db", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
