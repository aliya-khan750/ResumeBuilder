const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      default: "My Resume",
    },

    resumeData: {
      personal: {
        fullName: {
          type: String,
          default: "",
        },

        jobTitle: {
          type: String,
          default: "",
        },

        email: {
          type: String,
          default: "",
        },

        phone: {
          type: String,
          default: "",
        },

        location: {
          type: String,
          default: "",
        },

        linkedin: {
          type: String,
          default: "",
        },

        github: {
          type: String,
          default: "",
        },

        summary: {
          type: String,
          default: "",
        },
      },

      education: {
        type: Array,
        default: [],
      },

      experience: {
        type: Array,
        default: [],
      },

      projects: {
        type: Array,
        default: [],
      },

      skills: {
        technicalSkills: {
          type: String,
          default: "",
        },

        toolsTechnologies: {
          type: String,
          default: "",
        },

        softSkills: {
          type: String,
          default: "",
        },
      },

      certifications: {
        type: Array,
        default: [],
      },

      achievements: {
        type: Array,
        default: [],
      },

      languages: {
        type: Array,
        default: [],
      },

      references: {
        type: Array,
        default: [],
      },

      customSections: {
        type: Array,
        default: [],
      },
    },
  },

  {
    timestamps: true,
  }
);

const Resume = mongoose.model("Resume", resumeSchema);

module.exports = Resume;