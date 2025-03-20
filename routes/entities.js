const express = require("express");
const router = express.Router();
const Entity = require("../models/Entity");

// Create entity
router.post("/entities", async (req, res) => {
  try {
    const newEntity = new Entity(req.body);
    await newEntity.save();
    res.status(201).json(newEntity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all entities
router.get("/entities", async (req, res) => {
  try {
    const entities = await Entity.find();
    res.json(entities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update entity
router.put("/entities/:id", async (req, res) => {
  try {
    const { name } = req.body;
    const entity = await Entity.findByIdAndUpdate(req.params.id, { name }, { new: true });
    res.json(entity);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete entity
router.delete("/entities/:id", async (req, res) => {
  try {
    await Entity.findByIdAndDelete(req.params.id);
    res.json({ message: "Entity deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
