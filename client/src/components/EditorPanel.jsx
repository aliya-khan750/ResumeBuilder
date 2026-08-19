import "./EditorPanel.css";

import { useResume } from "../context/ResumeContext";

import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import CertificationsSection from "./CertificationsSection";
import AchievementsSection from "./AchievementsSection";
import LanguagesSection from "./LanguagesSection";
import ReferencesSection from "./ReferencesSection";
import CustomSection from "./CustomSection";

function EditorPanel() {
  const { resumeData, updatePersonal } = useResume();

  const personal = resumeData.personal;

  return (
    <section className="editor-panel">

      {/* ================= HEADER ================= */}

      <div className="editor-header">
        <h2>Resume Editor</h2>

        <button className="save-button">
          Save
        </button>
      </div>


      {/* ================= PERSONAL INFORMATION ================= */}

      <div className="editor-section">

        <div className="section-title">

          <div>
            <h3>Personal Information</h3>

            <p>
              Enter your basic contact information.
            </p>
          </div>

          <span>⌃</span>

        </div>


        <div className="form-grid">

          {/* Full Name */}

          <div className="form-group">

            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={personal.fullName}
              onChange={(e) =>
                updatePersonal(
                  "fullName",
                  e.target.value
                )
              }
            />

          </div>


          {/* Job Title */}

          <div className="form-group">

            <label>Job Title</label>

            <input
              type="text"
              placeholder="e.g. Full Stack Developer"
              value={personal.jobTitle}
              onChange={(e) =>
                updatePersonal(
                  "jobTitle",
                  e.target.value
                )
              }
            />

          </div>


          {/* Email */}

          <div className="form-group">

            <label>Email</label>

            <input
              type="email"
              placeholder="your@email.com"
              value={personal.email}
              onChange={(e) =>
                updatePersonal(
                  "email",
                  e.target.value
                )
              }
            />

          </div>


          {/* Phone */}

          <div className="form-group">

            <label>Phone</label>

            <input
              type="text"
              placeholder="+91 12345 67890"
              value={personal.phone}
              onChange={(e) =>
                updatePersonal(
                  "phone",
                  e.target.value
                )
              }
            />

          </div>


          {/* Location */}

          <div className="form-group full-width">

            <label>Location</label>

            <input
              type="text"
              placeholder="City, State, Country"
              value={personal.location}
              onChange={(e) =>
                updatePersonal(
                  "location",
                  e.target.value
                )
              }
            />

          </div>


          {/* LinkedIn */}

          <div className="form-group">

            <label>LinkedIn</label>

            <input
              type="text"
              placeholder="linkedin.com/in/username"
              value={personal.linkedin}
              onChange={(e) =>
                updatePersonal(
                  "linkedin",
                  e.target.value
                )
              }
            />

          </div>


          {/* GitHub */}

          <div className="form-group">

            <label>GitHub</label>

            <input
              type="text"
              placeholder="github.com/username"
              value={personal.github}
              onChange={(e) =>
                updatePersonal(
                  "github",
                  e.target.value
                )
              }
            />

          </div>


          {/* Professional Summary */}

          <div className="form-group full-width">

            <label>
              Professional Summary
            </label>

            <textarea
              rows="5"
              placeholder="Write a short professional summary..."
              value={personal.summary}
              onChange={(e) =>
                updatePersonal(
                  "summary",
                  e.target.value
                )
              }
            />

          </div>

        </div>

      </div>


      {/* ================= EXPERIENCE ================= */}

      <ExperienceSection />


      {/* ================= EDUCATION ================= */}

      <EducationSection />


      {/* ================= SKILLS ================= */}

      <SkillsSection />


      {/* ================= PROJECTS ================= */}

      <ProjectsSection />


      {/* ================= CERTIFICATIONS ================= */}

      <CertificationsSection />


      {/* ================= ACHIEVEMENTS ================= */}

      <AchievementsSection />


      {/* ================= LANGUAGES ================= */}

      <LanguagesSection />


      {/* ================= REFERENCES ================= */}

      <ReferencesSection />


      {/* ================= CUSTOM SECTION ================= */}

      <CustomSection />

    </section>
  );
}

export default EditorPanel;