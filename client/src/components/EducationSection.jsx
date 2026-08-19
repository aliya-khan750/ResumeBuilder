import { useResume } from "../context/ResumeContext";

function EducationSection() {
  const { resumeData, updateResumeData } = useResume();

  const education = resumeData.education || [];

  // ================= ADD EDUCATION =================

  const addEducation = () => {
    const newEducation = {
      degree: "",
      institution: "",
      startYear: "",
      endYear: "",
      location: "",
      grade: "",
    };

    updateResumeData("education", [
      ...education,
      newEducation,
    ]);
  };

  // ================= UPDATE EDUCATION =================

  const updateEducation = (index, field, value) => {
    const updatedEducation = education.map(
      (item, i) => {
        if (i === index) {
          return {
            ...item,
            [field]: value,
          };
        }

        return item;
      }
    );

    updateResumeData(
      "education",
      updatedEducation
    );
  };

  // ================= REMOVE EDUCATION =================

  const deleteEducation = (index) => {
    const updatedEducation = education.filter(
      (_, i) => i !== index
    );

    updateResumeData(
      "education",
      updatedEducation
    );
  };

  return (
    <div className="editor-section">

      {/* ================= HEADER ================= */}

      <div className="section-title">

        <div>

          <h3>
            Education
          </h3>

          <p>
            Add your educational background.
          </p>

        </div>

        <span>
          ⌃
        </span>

      </div>


      {/* ================= EDUCATION ENTRIES ================= */}

      {education.map((item, index) => (

        <div
          key={index}
          className="education-entry"
        >

          <div className="form-grid">

            {/* ================= DEGREE ================= */}

            <div className="form-group">

              <label>
                Degree
              </label>

              <input
                type="text"
                placeholder="e.g. B.Tech in Computer Science"
                value={item.degree || ""}
                onChange={(e) =>
                  updateEducation(
                    index,
                    "degree",
                    e.target.value
                  )
                }
              />

            </div>


            {/* ================= INSTITUTION ================= */}

            <div className="form-group">

              <label>
                Institution
              </label>

              <input
                type="text"
                placeholder="e.g. ITM College"
                value={item.institution || ""}
                onChange={(e) =>
                  updateEducation(
                    index,
                    "institution",
                    e.target.value
                  )
                }
              />

            </div>


            {/* ================= START YEAR ================= */}

            <div className="form-group">

              <label>
                Start Year
              </label>

              <input
                type="text"
                placeholder="e.g. 2023"
                value={item.startYear || ""}
                onChange={(e) =>
                  updateEducation(
                    index,
                    "startYear",
                    e.target.value
                  )
                }
              />

            </div>


            {/* ================= END YEAR ================= */}

            <div className="form-group">

              <label>
                End Year
              </label>

              <input
                type="text"
                placeholder="e.g. 2027"
                value={item.endYear || ""}
                onChange={(e) =>
                  updateEducation(
                    index,
                    "endYear",
                    e.target.value
                  )
                }
              />

            </div>


            {/* ================= LOCATION ================= */}

            <div className="form-group">

              <label>
                Location
              </label>

              <input
                type="text"
                placeholder="City, State"
                value={item.location || ""}
                onChange={(e) =>
                  updateEducation(
                    index,
                    "location",
                    e.target.value
                  )
                }
              />

            </div>


            {/* ================= GRADE ================= */}

            <div className="form-group">

              <label>
                Grade / CGPA
              </label>

              <input
                type="text"
                placeholder="e.g. 7.5 CGPA"
                value={item.grade || ""}
                onChange={(e) =>
                  updateEducation(
                    index,
                    "grade",
                    e.target.value
                  )
                }
              />

            </div>

          </div>


          {/* ================= REMOVE ================= */}

          <button
            type="button"
            className="add-button"
            onClick={() =>
              deleteEducation(index)
            }
          >
            Remove Education
          </button>

        </div>

      ))}


      {/* ================= ADD ================= */}

      <button
        type="button"
        className="add-button"
        onClick={addEducation}
      >
        + Add Education
      </button>

    </div>
  );
}

export default EducationSection;