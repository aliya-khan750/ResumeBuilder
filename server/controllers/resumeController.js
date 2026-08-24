const Resume = require("../models/Resume");

// ================= CREATE RESUME =================

const createResume = async (req, res) => {
  try {
    const { title, resumeData } = req.body;

    if (!resumeData) {
      return res.status(400).json({
        message: "Resume data is required.",
      });
    }

    const resume = await Resume.create({
      user: req.userId,
      title: title || "My Resume",
      resumeData,
    });

    res.status(201).json({
      message: "Resume created successfully.",
      resume,
    });
  } catch (error) {
    console.error("Create resume error:", error.message);

    res.status(500).json({
      message: "Server error while creating resume.",
    });
  }
};


// ================= GET MY RESUMES =================

const getMyResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({
      user: req.userId,
    }).sort({
      updatedAt: -1,
    });

    res.status(200).json({
      resumes,
    });
  } catch (error) {
    console.error("Get resumes error:", error.message);

    res.status(500).json({
      message: "Server error while fetching resumes.",
    });
  }
};


// ================= GET SINGLE RESUME =================

const getResumeById = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      user: req.userId,
    });

    if (!resume) {
      return res.status(404).json({
        message: "Resume not found.",
      });
    }

    res.status(200).json({
      resume,
    });
  } catch (error) {
    console.error("Get resume error:", error.message);

    res.status(500).json({
      message: "Server error while fetching resume.",
    });
  }
};


// ================= UPDATE RESUME =================

const updateResume = async (req, res) => {
  try {
    const { title, resumeData } = req.body;

    const resume = await Resume.findOne({
      _id: req.params.id,
      user: req.userId,
    });

    if (!resume) {
      return res.status(404).json({
        message: "Resume not found.",
      });
    }

    if (title !== undefined) {
      resume.title = title;
    }

    if (resumeData !== undefined) {
      resume.resumeData = resumeData;
    }

    await resume.save();

    res.status(200).json({
      message: "Resume updated successfully.",
      resume,
    });
  } catch (error) {
    console.error("Update resume error:", error.message);

    res.status(500).json({
      message: "Server error while updating resume.",
    });
  }
};


// ================= DELETE RESUME =================

const deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findOneAndDelete({
      _id: req.params.id,
      user: req.userId,
    });

    if (!resume) {
      return res.status(404).json({
        message: "Resume not found.",
      });
    }

    res.status(200).json({
      message: "Resume deleted successfully.",
    });
  } catch (error) {
    console.error("Delete resume error:", error.message);

    res.status(500).json({
      message: "Server error while deleting resume.",
    });
  }
};


module.exports = {
  createResume,
  getMyResumes,
  getResumeById,
  updateResume,
  deleteResume,
};