const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const Challenge = require("../models/schema"); // Import schema.js

// Validation rules for challenge creation and update
const validateChallenge = [
    body("title").notEmpty().withMessage("Title is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("category").isIn(["funny", "extreme", "creative", "random", "food", "social"])
        .withMessage("Invalid category"),
];

// Create a new challenge
router.post("/challenges", validateChallenge, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
        console.log("Received Data:", req.body); // ✅ Check if frontend sends correct data

        const newChallenge = new Challenge(req.body);
        await newChallenge.save();

        res.status(201).json({ success: true, message: "Challenge added!", data: newChallenge });
    } catch (error) {
        console.error("Error adding challenge:", error); // ✅ Logs error to terminal
        res.status(500).json({ success: false, message: "Error adding challenge", error });
    }
});

// Get all challenges
router.get("/challenges", async (req, res) => {
    try {
        const challenges = await Challenge.find();
        res.json({ success: true, data: challenges });
    } catch (error) {
        console.error("Error fetching challenges:", error);
        res.status(500).json({ success: false, message: "Error fetching challenges", error: error.message });
    }
});

// Get a single challenge by ID
router.get("/challenges/:id", async (req, res) => {
    try {
        const challenge = await Challenge.findById(req.params.id);
        if (!challenge) {
            return res.status(404).json({ success: false, message: "Challenge not found" });
        }
        res.json({ success: true, data: challenge });
    } catch (error) {
        console.error("Error fetching challenge:", error);
        res.status(500).json({ success: false, message: "Error fetching challenge", error: error.message });
    }
});

// Update a challenge by ID
router.put("/challenges/:id", validateChallenge, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
        const updatedChallenge = await Challenge.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedChallenge) {
            return res.status(404).json({ success: false, message: "Challenge not found" });
        }
        res.json({ success: true, message: "Challenge updated!", data: updatedChallenge });
    } catch (error) {
        console.error("Error updating challenge:", error);
        res.status(500).json({ success: false, message: "Error updating challenge", error: error.message });
    }
});

// Delete a challenge by ID
router.delete("/challenges/:id", async (req, res) => {
    try {
        const deletedChallenge = await Challenge.findByIdAndDelete(req.params.id);
        if (!deletedChallenge) {
            return res.status(404).json({ success: false, message: "Challenge not found" });
        }
        res.json({ success: true, message: "Challenge deleted!" });
    } catch (error) {
        console.error("Error deleting challenge:", error);
        res.status(500).json({ success: false, message: "Error deleting challenge", error: error.message });
    }
});

module.exports = router;
