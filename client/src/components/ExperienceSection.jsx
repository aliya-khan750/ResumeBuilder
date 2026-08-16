function ExperienceSection() {
  return (
    <div className="editor-section">

      <div className="section-title">
        <div>
          <h3>Experience</h3>
          <p>Add your professional work experience.</p>
        </div>

        <span>⌃</span>
      </div>

      <div className="form-grid">

        <div className="form-group">
          <label>Job Title</label>
          <input
            type="text"
            placeholder="e.g. Software Developer"
          />
        </div>

        <div className="form-group">
          <label>Company</label>
          <input
            type="text"
            placeholder="Company name"
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            placeholder="City, State, Country"
          />
        </div>

        <div className="form-group">
          <label>Employment Type</label>
          <select>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Internship</option>
            <option>Freelance</option>
          </select>
        </div>

        <div className="form-group">
          <label>Start Date</label>
          <input type="month" />
        </div>

        <div className="form-group">
          <label>End Date</label>
          <input type="month" />
        </div>

        <div className="form-group full-width">
          <label>Job Description</label>

          <textarea
            rows="5"
            placeholder="Describe your responsibilities and achievements..."
          ></textarea>
        </div>

      </div>

      <button className="add-button">
        + Add Experience
      </button>

    </div>
  );
}

export default ExperienceSection;