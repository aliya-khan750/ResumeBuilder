function ReferencesSection() {
  return (
    <div className="editor-section">

      <div className="section-title">
        <div>
          <h3>References</h3>
          <p>Add professional references to your resume.</p>
        </div>

        <span>⌃</span>
      </div>

      <div className="form-grid">

        <div className="form-group">
          <label>Reference Name</label>
          <input
            type="text"
            placeholder="e.g. John Doe"
          />
        </div>

        <div className="form-group">
          <label>Job Title</label>
          <input
            type="text"
            placeholder="e.g. Senior Manager"
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
          <label>Email</label>
          <input
            type="email"
            placeholder="reference@email.com"
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            placeholder="+91 12345 67890"
          />
        </div>

        <div className="form-group">
          <label>Relationship</label>
          <input
            type="text"
            placeholder="e.g. Former Manager"
          />
        </div>

      </div>

    </div>
  );
}

export default ReferencesSection;