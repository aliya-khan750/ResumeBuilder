require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

const PORT = 5000;

/* ================= DATABASE ================= */

connectDB();

/* ================= MIDDLEWARE ================= */

app.use(cors());
app.use(express.json());

/* ================= AUTH ROUTES ================= */

app.use("/api/auth", authRoutes);

/* ================= TEST ROUTE ================= */

app.get("/", (req, res) => {
  res.json({
    message: "ResumeCraft API is running 🚀",
  });
});

/* ================= SERVER ================= */

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});