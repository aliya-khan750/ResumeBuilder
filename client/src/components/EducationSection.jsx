function EducationSection() {
  return (
    <div className="editor-section">

      <div className="section-title">
        <div>
          <h3>Education</h3>
          <p>Add your educational background.</p>
        </div>

        <span>⌃</span>
      </div>

      <div className="form-grid">

        <div className="form-group">
          <label>Degree</label>
          <input
            type="text"
            placeholder="e.g. B.Tech in Computer Science"
          />
        </div>

        <div className="form-group">
          <label>Institution</label>
          <input
            type="text"
            placeholder="e.g. ITM College"
          />
        </div>

        <div className="form-group">
          <label>Start Year</label>
          <input
            type="text"
            placeholder="e.g. 2023"
          />
        </div>

        <div className="form-group">
          <label>End Year</label>
          <input
            type="text"
            placeholder="e.g. 2027"
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            placeholder="City, State"
          />
        </div>

        <div className="form-group">
          <label>Grade / CGPA</label>
          <input
            type="text"
            placeholder="e.g. 7.5 CGPA"
          />
        </div>

      </div>

    </div>
  );
}

export default EducationSection;