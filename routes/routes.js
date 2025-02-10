const express = require("express");
const router = express.Router();
const Challenge = require("../models/schema"); // Import schema.js

// Create a new challenge
router.post("/challenges", async (req, res) => {
    try {
        const newChallenge = new Challenge(req.body);
        await newChallenge.save();
        res.status(201).json({ success: true, message: "Challenge added!", data: newChallenge });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error adding challenge", error });
    }
});

// Get all challenges
router.get("/challenges", async (req, res) => {
    try {
        const challenges = await Challenge.find();
        res.json({ success: true, data: challenges });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching challenges", error });
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
        res.status(500).json({ success: false, message: "Error fetching challenge", error });
    }
});

// Update a challenge by ID
router.put("/challenges/:id", async (req, res) => {
    try {
        const updatedChallenge = await Challenge.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedChallenge) {
            return res.status(404).json({ success: false, message: "Challenge not found" });
        }
        res.json({ success: true, message: "Challenge updated!", data: updatedChallenge });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating challenge", error });
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
        res.status(500).json({ success: false, message: "Error deleting challenge", error });
    }
});

module.exports = router;
