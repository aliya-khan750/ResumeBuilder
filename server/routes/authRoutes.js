const express = require("express");

const {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");

const router = express.Router();


// =====================================================
// REGISTER
// =====================================================

// POST /api/auth/register

router.post(
  "/register",
  registerUser
);


// =====================================================
// LOGIN
// =====================================================

// POST /api/auth/login

router.post(
  "/login",
  loginUser
);


// =====================================================
// FORGOT PASSWORD
// =====================================================

// POST /api/auth/forgot-password

router.post(
  "/forgot-password",
  forgotPassword
);


// =====================================================
// RESET PASSWORD
// =====================================================

// POST /api/auth/reset-password/:token

router.post(
  "/reset-password/:token",
  resetPassword
);


// =====================================================
// EXPORT ROUTER
// =====================================================

module.exports = router;