import { useResume } from "../context/ResumeContext";

function LanguagesSection() {
  const { resumeData, updateResumeData } = useResume();

  const languages = resumeData.languages || [];

  const addLanguage = () => {
    updateResumeData("languages", [
      ...languages,
      {
        language: "",
        proficiency: "",
      },
    ]);
  };

  const updateLanguage = (index, field, value) => {
    const updated = languages.map((item, i) =>
      i === index
        ? { ...item, [field]: value }
        : item
    );

    updateResumeData("languages", updated);
  };

  const removeLanguage = (index) => {
    updateResumeData(
      "languages",
      languages.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="editor-section">

      <div className="section-title">
        <div>
          <h3>Languages</h3>
          <p>Add languages you know.</p>
        </div>

        <span>⌃</span>
      </div>

      {languages.map((item, index) => (
        <div key={index} className="project-entry">

          <div className="form-grid">

            <div className="form-group">
              <label>Language</label>

              <input
                type="text"
                placeholder="e.g. English"
                value={item.language}
                onChange={(e) =>
                  updateLanguage(
                    index,
                    "language",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="form-group">
              <label>Proficiency</label>

              <select
                value={item.proficiency}
                onChange={(e) =>
                  updateLanguage(
                    index,
                    "proficiency",
                    e.target.value
                  )
                }
              >
                <option value="">Select proficiency</option>
                <option value="Native">Native</option>
                <option value="Fluent">Fluent</option>
                <option value="Advanced">Advanced</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Basic">Basic</option>
              </select>
            </div>

          </div>

          <button
            type="button"
            className="add-button"
            onClick={() => removeLanguage(index)}
          >
            Remove Language
          </button>

        </div>
      ))}

      <button
        type="button"
        className="add-button"
        onClick={addLanguage}
      >
        + Add Language
      </button>

    </div>
  );
}

export default LanguagesSection;