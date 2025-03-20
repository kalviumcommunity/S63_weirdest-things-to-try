const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDatabase = require("./MongoDB.js");
const routes = require("./routes/routes"); // Main Routes
const entityRoutes = require("./routes/entities"); // Entity Routes
const cors = require("cors"); // CORS Middleware

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS

// Connect to Database
connectDatabase();

// Ping Route to check if the server is running
app.get("/ping", (req, res) => {
  res.send("pong");
});

// Home Route with DB Status
app.get("/", (req, res) => {
  const status = mongoose.connection.readyState === 1 ? "Connected" : "Not Connected";
  res.json({ message: "Welcome to the API", db_status: status });
});

// Use API routes
app.use("/api", routes);
app.use("/api/entities", entityRoutes); // Register entity routes

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err);
  res.status(500).json({ message: "Internal Server Error", error: err.message });
});

// Set PORT from environment variables or default to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
