import { useResume } from "../context/ResumeContext";

function CertificationsSection() {
  const { resumeData, updateResumeData } = useResume();

  const certifications = resumeData.certifications || [];

  const addCertification = () => {
    updateResumeData("certifications", [
      ...certifications,
      {
        name: "",
        organization: "",
        date: "",
        link: "",
      },
    ]);
  };

  const updateCertification = (index, field, value) => {
    const updated = certifications.map((item, i) =>
      i === index
        ? { ...item, [field]: value }
        : item
    );

    updateResumeData("certifications", updated);
  };

  const removeCertification = (index) => {
    updateResumeData(
      "certifications",
      certifications.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="editor-section">

      <div className="section-title">
        <div>
          <h3>Certifications</h3>
          <p>Add your certifications and credentials.</p>
        </div>

        <span>⌃</span>
      </div>

      {certifications.map((item, index) => (
        <div key={index} className="project-entry">

          <div className="form-grid">

            <div className="form-group">
              <label>Certification Name</label>

              <input
                type="text"
                placeholder="e.g. AWS Cloud Practitioner"
                value={item.name}
                onChange={(e) =>
                  updateCertification(
                    index,
                    "name",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="form-group">
              <label>Issuing Organization</label>

              <input
                type="text"
                placeholder="e.g. Amazon Web Services"
                value={item.organization}
                onChange={(e) =>
                  updateCertification(
                    index,
                    "organization",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="form-group">
              <label>Issue Date</label>

              <input
                type="text"
                placeholder="e.g. June 2026"
                value={item.date}
                onChange={(e) =>
                  updateCertification(
                    index,
                    "date",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="form-group">
              <label>Certificate Link</label>

              <input
                type="text"
                placeholder="https://..."
                value={item.link}
                onChange={(e) =>
                  updateCertification(
                    index,
                    "link",
                    e.target.value
                  )
                }
              />
            </div>

          </div>

          <button
            type="button"
            className="add-button"
            onClick={() => removeCertification(index)}
          >
            Remove Certification
          </button>

        </div>
      ))}

      <button
        type="button"
        className="add-button"
        onClick={addCertification}
      >
        + Add Certification
      </button>

    </div>
  );
}

export default CertificationsSection;