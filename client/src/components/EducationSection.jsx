import { useResume } from "../context/ResumeContext";

function EducationSection() {
  const { resumeData, updateResumeData } = useResume();

  const education = resumeData.education;

  const updateEducation = (field, value) => {
    updateResumeData("education", {
      ...education,
      [field]: value,
    });
  };

  return (
    <div className="editor-section">

      <div className="section-title">
        <div>
          <h3>Education</h3>
          <p>Add your educational background.</p>
        </div>

        <span>⌃</span>
      </div>

      <div className="form-grid">

        {/* Degree */}
        <div className="form-group">
          <label>Degree</label>

          <input
            type="text"
            placeholder="e.g. B.Tech in Computer Science"
            value={education.degree || ""}
            onChange={(e) =>
              updateEducation("degree", e.target.value)
            }
          />
        </div>

        {/* Institution */}
        <div className="form-group">
          <label>Institution</label>

          <input
            type="text"
            placeholder="e.g. ITM College"
            value={education.institution || ""}
            onChange={(e) =>
              updateEducation("institution", e.target.value)
            }
          />
        </div>

        {/* Start Year */}
        <div className="form-group">
          <label>Start Year</label>

          <input
            type="text"
            placeholder="e.g. 2023"
            value={education.startYear || ""}
            onChange={(e) =>
              updateEducation("startYear", e.target.value)
            }
          />
        </div>

        {/* End Year */}
        <div className="form-group">
          <label>End Year</label>

          <input
            type="text"
            placeholder="e.g. 2027"
            value={education.endYear || ""}
            onChange={(e) =>
              updateEducation("endYear", e.target.value)
            }
          />
        </div>

        {/* Location */}
        <div className="form-group">
          <label>Location</label>

          <input
            type="text"
            placeholder="City, State"
            value={education.location || ""}
            onChange={(e) =>
              updateEducation("location", e.target.value)
            }
          />
        </div>

        {/* Grade / CGPA */}
        <div className="form-group">
          <label>Grade / CGPA</label>

          <input
            type="text"
            placeholder="e.g. 7.5 CGPA"
            value={education.grade || ""}
            onChange={(e) =>
              updateEducation("grade", e.target.value)
            }
          />
        </div>

      </div>

    </div>
  );
}

export default EducationSection;