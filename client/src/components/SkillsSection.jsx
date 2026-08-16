function SkillsSection() {
  return (
    <div className="editor-section">

      <div className="section-title">
        <div>
          <h3>Skills</h3>
          <p>Add your technical and professional skills.</p>
        </div>

        <span>⌃</span>
      </div>

      <div className="form-grid">

        <div className="form-group full-width">
          <label>Technical Skills</label>
          <input
            type="text"
            placeholder="e.g. React, JavaScript, Node.js, MongoDB"
          />
        </div>

        <div className="form-group full-width">
          <label>Tools & Technologies</label>
          <input
            type="text"
            placeholder="e.g. Git, GitHub, VS Code, Docker"
          />
        </div>

        <div className="form-group full-width">
          <label>Soft Skills</label>
          <input
            type="text"
            placeholder="e.g. Communication, Leadership, Problem Solving"
          />
        </div>

      </div>

    </div>
  );
}

export default SkillsSection;