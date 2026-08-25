const express = require("express");

const {
  generateAIResponse,
} = require("../controllers/aiController");

const router = express.Router();


// =====================================================
// GENERATE AI RESPONSE
// =====================================================

// POST /api/ai/generate

router.post(
  "/generate",
  generateAIResponse
);


module.exports = router;