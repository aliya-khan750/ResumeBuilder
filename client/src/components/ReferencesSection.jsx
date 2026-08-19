import { useResume } from "../context/ResumeContext";

function ReferencesSection() {
  const { resumeData, updateResumeData } = useResume();

  const references = resumeData.references || [];

  const addReference = () => {
    updateResumeData("references", [
      ...references,
      {
        name: "",
        designation: "",
        company: "",
        email: "",
        phone: "",
      },
    ]);
  };

  const updateReference = (index, field, value) => {
    const updated = references.map((item, i) =>
      i === index
        ? { ...item, [field]: value }
        : item
    );

    updateResumeData("references", updated);
  };

  const removeReference = (index) => {
    updateResumeData(
      "references",
      references.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="editor-section">

      <div className="section-title">
        <div>
          <h3>References</h3>
          <p>Add professional references.</p>
        </div>

        <span>⌃</span>
      </div>

      {references.map((item, index) => (
        <div key={index} className="project-entry">

          <div className="form-grid">

            <div className="form-group">
              <label>Name</label>

              <input
                type="text"
                placeholder="e.g. John Smith"
                value={item.name}
                onChange={(e) =>
                  updateReference(
                    index,
                    "name",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="form-group">
              <label>Designation</label>

              <input
                type="text"
                placeholder="e.g. Senior Manager"
                value={item.designation}
                onChange={(e) =>
                  updateReference(
                    index,
                    "designation",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="form-group">
              <label>Company</label>

              <input
                type="text"
                placeholder="Company name"
                value={item.company}
                onChange={(e) =>
                  updateReference(
                    index,
                    "company",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="email@example.com"
                value={item.email}
                onChange={(e) =>
                  updateReference(
                    index,
                    "email",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="form-group">
              <label>Phone</label>

              <input
                type="text"
                placeholder="+91 12345 67890"
                value={item.phone}
                onChange={(e) =>
                  updateReference(
                    index,
                    "phone",
                    e.target.value
                  )
                }
              />
            </div>

          </div>

          <button
            type="button"
            className="add-button"
            onClick={() => removeReference(index)}
          >
            Remove Reference
          </button>

        </div>
      ))}

      <button
        type="button"
        className="add-button"
        onClick={addReference}
      >
        + Add Reference
      </button>

    </div>
  );
}

export default ReferencesSection;