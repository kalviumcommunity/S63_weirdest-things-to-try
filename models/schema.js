const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Challenge title is required"],
        trim: true,
        minlength: [3, "Title must be at least 3 characters long"]
    },
    description: {
        type: String,
        required: [true, "Challenge description is required"],
        trim: true,
        minlength: [5, "Description must be at least 5 characters long"]
    },
    category: {
        type: String,
        enum: ["funny", "extreme", "creative", "random", "food", "social"],
        default: "random"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true }); // Automatically adds createdAt & updatedAt fields

const Challenge = mongoose.model("Challenge", challengeSchema);
module.exports = Challenge;
