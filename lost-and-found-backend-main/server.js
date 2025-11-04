require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");

const app = express();

// ✅ Connect to MongoDB
connectDB();

// ✅ CORS setup for local + production frontend
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://lynar-lost-and-found-mern.vercel.app",
    ],
    credentials: true,
  })
);

// ✅ Body parser
app.use(express.json());

// ✅ Routes
app.use("/api/auth", require("./src/routes/auth"));
app.use("/api/items", require("./src/routes/items"));

// ✅ Root route for testing
app.get("/", (req, res) => {
  res.send("Lost & Found API is running successfully.");
});

// ✅ Global error handler
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ msg: "Server error", error: err.message });
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
