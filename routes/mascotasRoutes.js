const express = require("express");
const router = express.Router();
const Mascota = require("../models/Mascota");

// Obtener todas las mascotas
router.get("/", async (req, res) => {
   try {
      const mascotas = await Mascota.findAll();
      res.json(mascotas);
   } catch (error) {
      res.status(500).json({ error: "Error al obtener mascotas" });
   }
});

// Crear una nueva mascota
router.post("/", async (req, res) => {
   try {
      const nuevaMascota = await Mascota.create(req.body);
      res.status(201).json(nuevaMascota);
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
});

// Obtener una mascota por ID
router.get("/:id", async (req, res) => {
   const mascota = await Mascota.findByPk(req.params.id);
   mascota
      ? res.json(mascota)
      : res.status(404).json({ error: "Mascota no encontrada" });
});

// Actualizar mascota
router.put("/:id", async (req, res) => {
   try {
      const mascota = await Mascota.findByPk(req.params.id);
      if (mascota) {
         await mascota.update(req.body);
         res.json(mascota);
      } else {
         res.status(404).json({ error: "Mascota no encontrada" });
      }
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
});

// Eliminar mascota
router.delete("/:id", async (req, res) => {
   const borrado = await Mascota.destroy({ where: { id: req.params.id } });
   borrado
      ? res.json({ mensaje: "Mascota eliminada" })
      : res.status(404).json({ error: "Mascota no encontrada" });
});

module.exports = router;
