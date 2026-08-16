function CustomSection() {
  return (
    <div className="editor-section">

      <div className="section-title">
        <div>
          <h3>Custom Section</h3>
          <p>Add any additional information to your resume.</p>
        </div>

        <span>⌃</span>
      </div>

      <div className="form-grid">

        <div className="form-group full-width">
          <label>Section Title</label>

          <input
            type="text"
            placeholder="e.g. Publications, Volunteer Experience"
          />
        </div>

        <div className="form-group full-width">
          <label>Content</label>

          <textarea
            rows="5"
            placeholder="Enter your additional information..."
          ></textarea>
        </div>

      </div>

    </div>
  );
}

export default CustomSection;