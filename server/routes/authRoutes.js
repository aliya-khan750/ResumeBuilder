const express = require("express");

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

const router = express.Router();

/* ================= REGISTER ================= */

// POST /api/auth/register
router.post("/register", registerUser);


/* ================= LOGIN ================= */

// POST /api/auth/login
router.post("/login", loginUser);


module.exports = router;