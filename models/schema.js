const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Challenge title is required"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Challenge description is required"]
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
});

const Challenge = mongoose.model("Challenge", challengeSchema);
module.exports = Challenge;
