const express = require("express");
const router = express.Router();
const Cliente = require("../models/Cliente");

// GET todos
router.get("/", async (req, res) => {
  const clientes = await Cliente.findAll();
  res.json(clientes);
});

// GET por id
router.get("/:id", async (req, res) => {
  const cliente = await Cliente.findByPk(req.params.id);
  res.json(cliente);
});

// POST crear
router.post("/", async (req, res) => {
  const nuevo = await Cliente.create(req.body);
  res.json(nuevo);
});

// PUT actualizar
router.put("/:id", async (req, res) => {
  await Cliente.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ mensaje: "Cliente actualizado" });
});

router.delete("/:id", async (req, res) => {
  await Cliente.destroy({
    where: { id: req.params.id },
  });
  res.json({ mensaje: "Cliente eliminado" });
});

module.exports = router;
