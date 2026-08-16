function ProjectsSection() {
  return (
    <div className="editor-section">

      <div className="section-title">
        <div>
          <h3>Projects</h3>
          <p>Add your projects and highlight your work.</p>
        </div>

        <span>⌃</span>
      </div>

      <div className="form-grid">

        <div className="form-group">
          <label>Project Name</label>
          <input
            type="text"
            placeholder="e.g. AI Habit Tracker"
          />
        </div>

        <div className="form-group">
          <label>Technologies</label>
          <input
            type="text"
            placeholder="e.g. React, Node.js, MongoDB"
          />
        </div>

        <div className="form-group full-width">
          <label>Project Link</label>
          <input
            type="text"
            placeholder="https://github.com/username/project"
          />
        </div>

        <div className="form-group full-width">
          <label>Project Description</label>
          <textarea
            rows="4"
            placeholder="Describe your project, features, and your contribution..."
          ></textarea>
        </div>

      </div>

    </div>
  );
}

export default ProjectsSection;