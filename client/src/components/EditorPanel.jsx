import "./EditorPanel.css";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";

function EditorPanel() {
  return (
    <section className="editor-panel">

      {/* Header */}
      <div className="editor-header">
        <h2>Resume Editor</h2>

        <button className="save-button">
          Save
        </button>
      </div>

      {/* Personal Information */}
      <div className="editor-section">

        <div className="section-title">
          <div>
            <h3>Personal Information</h3>
            <p>Enter your basic contact information.</p>
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
            />
          </div>

          {/* Job Title */}
          <div className="form-group">
            <label>Job Title</label>
            <input
              type="text"
              placeholder="e.g. Full Stack Developer"
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="your@email.com"
            />
          </div>

          {/* Phone */}
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              placeholder="+91 12345 67890"
            />
          </div>

          {/* Location */}
          <div className="form-group full-width">
            <label>Location</label>
            <input
              type="text"
              placeholder="City, State, Country"
            />
          </div>

          {/* LinkedIn */}
          <div className="form-group">
            <label>LinkedIn</label>
            <input
              type="text"
              placeholder="linkedin.com/in/username"
            />
          </div>

          {/* GitHub */}
          <div className="form-group">
            <label>GitHub</label>
            <input
              type="text"
              placeholder="github.com/username"
            />
          </div>

          {/* Professional Summary */}
          <div className="form-group full-width">
            <label>Professional Summary</label>

            <textarea
              rows="5"
              placeholder="Write a short professional summary..."
            ></textarea>
          </div>

        </div>

      </div>

      {/* Experience Section */}
      <ExperienceSection />
      <EducationSection />
      {/* Skills Section */}
     <SkillsSection />
     {/* Projects Section */}
      <ProjectsSection />  

    </section>
  );
}

export default EditorPanel;