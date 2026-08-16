function AchievementsSection() {
  return (
    <div className="editor-section">

      <div className="section-title">
        <div>
          <h3>Achievements</h3>
          <p>Highlight your awards, achievements and accomplishments.</p>
        </div>

        <span>⌃</span>
      </div>

      <div className="form-grid">

        <div className="form-group">
          <label>Achievement Title</label>
          <input
            type="text"
            placeholder="e.g. Hackathon Winner"
          />
        </div>

        <div className="form-group">
          <label>Organization</label>
          <input
            type="text"
            placeholder="e.g. Google Developer Student Club"
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="text"
            placeholder="e.g. March 2026"
          />
        </div>

        <div className="form-group full-width">
          <label>Description</label>
          <textarea
            rows="4"
            placeholder="Describe your achievement..."
          ></textarea>
        </div>

      </div>

    </div>
  );
}

export default AchievementsSection;