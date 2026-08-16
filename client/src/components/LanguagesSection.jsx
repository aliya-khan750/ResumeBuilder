function LanguagesSection() {
  return (
    <div className="editor-section">

      <div className="section-title">
        <div>
          <h3>Languages</h3>
          <p>Add the languages you know and your proficiency level.</p>
        </div>

        <span>⌃</span>
      </div>

      <div className="form-grid">

        <div className="form-group">
          <label>Language</label>
          <input
            type="text"
            placeholder="e.g. English"
          />
        </div>

        <div className="form-group">
          <label>Proficiency</label>
          <select>
            <option>Native</option>
            <option>Fluent</option>
            <option>Advanced</option>
            <option>Intermediate</option>
            <option>Basic</option>
          </select>
        </div>

      </div>

      <button className="add-button">
        + Add Language
      </button>

    </div>
  );
}

export default LanguagesSection;