const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const {
  createResume,
  getMyResumes,
  getResumeById,
  updateResume,
  deleteResume,
} = require("../controllers/resumeController");

const router = express.Router();

/* ================= CREATE RESUME ================= */

// POST /api/resumes
router.post("/", authMiddleware, createResume);


/* ================= GET MY RESUMES ================= */

// GET /api/resumes
router.get("/", authMiddleware, getMyResumes);


/* ================= GET SINGLE RESUME ================= */

// GET /api/resumes/:id
router.get("/:id", authMiddleware, getResumeById);


/* ================= UPDATE RESUME ================= */

// PUT /api/resumes/:id
router.put("/:id", authMiddleware, updateResume);


/* ================= DELETE RESUME ================= */

// DELETE /api/resumes/:id
router.delete("/:id", authMiddleware, deleteResume);


module.exports = router;