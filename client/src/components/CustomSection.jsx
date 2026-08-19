import { useResume } from "../context/ResumeContext";

function CustomSection() {
  const { resumeData, updateResumeData } = useResume();

  const customSections = resumeData.customSections || [];

  const addCustomSection = () => {
    updateResumeData("customSections", [
      ...customSections,
      {
        title: "",
        content: "",
      },
    ]);
  };

  const updateCustomSection = (index, field, value) => {
    const updated = customSections.map((item, i) =>
      i === index
        ? { ...item, [field]: value }
        : item
    );

    updateResumeData("customSections", updated);
  };

  const removeCustomSection = (index) => {
    updateResumeData(
      "customSections",
      customSections.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="editor-section">

      <div className="section-title">
        <div>
          <h3>Custom Section</h3>
          <p>Create your own resume section.</p>
        </div>

        <span>⌃</span>
      </div>

      {customSections.map((item, index) => (
        <div key={index} className="project-entry">

          <div className="form-grid">

            <div className="form-group full-width">
              <label>Section Title</label>

              <input
                type="text"
                placeholder="e.g. Volunteer Experience"
                value={item.title}
                onChange={(e) =>
                  updateCustomSection(
                    index,
                    "title",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="form-group full-width">
              <label>Content</label>

              <textarea
                rows="5"
                placeholder="Write your content..."
                value={item.content}
                onChange={(e) =>
                  updateCustomSection(
                    index,
                    "content",
                    e.target.value
                  )
                }
              />
            </div>

          </div>

          <button
            type="button"
            className="add-button"
            onClick={() => removeCustomSection(index)}
          >
            Remove Custom Section
          </button>

        </div>
      ))}

      <button
        type="button"
        className="add-button"
        onClick={addCustomSection}
      >
        + Add Custom Section
      </button>

    </div>
  );
}

export default CustomSection;