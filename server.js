const express = require("express");
const mongoose = require("mongoose");
const connectDatabase = require("./MongoDB.js");
const routes = require("./routes/routes"); // Import routes

const app = express();
app.use(express.json()); // Middleware for JSON request bodies

connectDatabase();

app.get("/ping", (req, res) => {
  try {
    res.send("pong");
  } catch (error) {
    res.status(500).send("An error occurred");
  }
});

// *Add Home Route with DB Status*
app.get("/", (req, res) => {
  const status = mongoose.connection.readyState === 1 ? "Connected" : "Not Connected";
  res.json({ message: "Welcome to the API", db_status: status });
});

// Use the routes from the routes folder
app.use("/api", routes);

app.listen(5000, () => {
  console.log(`Server is running on port http://localhost:5000`);
});
