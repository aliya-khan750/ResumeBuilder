function CertificationsSection() {
  return (
    <div className="editor-section">

      <div className="section-title">
        <div>
          <h3>Certifications</h3>
          <p>Add your certifications and achievements.</p>
        </div>

        <span>⌃</span>
      </div>

      <div className="form-grid">

        <div className="form-group">
          <label>Certification Name</label>
          <input
            type="text"
            placeholder="e.g. AWS Certified Cloud Practitioner"
          />
        </div>

        <div className="form-group">
          <label>Issuing Organization</label>
          <input
            type="text"
            placeholder="e.g. Amazon Web Services"
          />
        </div>

        <div className="form-group">
          <label>Issue Date</label>
          <input
            type="text"
            placeholder="e.g. August 2026"
          />
        </div>

        <div className="form-group">
          <label>Credential ID</label>
          <input
            type="text"
            placeholder="e.g. ABC123XYZ"
          />
        </div>

        <div className="form-group full-width">
          <label>Credential Link</label>
          <input
            type="text"
            placeholder="https://example.com/certificate"
          />
        </div>

      </div>

    </div>
  );
}

export default CertificationsSection;