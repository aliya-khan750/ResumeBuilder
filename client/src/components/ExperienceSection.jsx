import { useResume } from "../context/ResumeContext";

function ExperienceSection() {
  const { resumeData, updateResumeData } = useResume();

  const experience = resumeData.experience;


  /* ================= ADD EXPERIENCE ================= */

  const addExperience = () => {
    const newExperience = {
      jobTitle: "",
      company: "",
      location: "",
      employmentType: "Full-time",
      startDate: "",
      endDate: "",
      description: "",
    };

    updateResumeData("experience", [
      ...experience,
      newExperience,
    ]);
  };


  /* ================= UPDATE EXPERIENCE ================= */

  const updateExperience = (index, field, value) => {
    const updatedExperience = experience.map(
      (item, i) =>
        i === index
          ? {
              ...item,
              [field]: value,
            }
          : item
    );

    updateResumeData(
      "experience",
      updatedExperience
    );
  };


  /* ================= DELETE EXPERIENCE ================= */

  const deleteExperience = (index) => {
    const updatedExperience = experience.filter(
      (_, i) => i !== index
    );

    updateResumeData(
      "experience",
      updatedExperience
    );
  };


  return (
    <div className="editor-section">

      {/* ================= HEADER ================= */}

      <div className="section-title">

        <div>

          <h3>
            Experience
          </h3>

          <p>
            Add your professional work experience.
          </p>

        </div>

        <span>
          ⌃
        </span>

      </div>


      {/* ================= EXPERIENCE ENTRIES ================= */}

      {experience.map((item, index) => (

        <div
          key={index}
          className="experience-entry"
        >

          <div className="form-grid">

            {/* Job Title */}

            <div className="form-group">

              <label>
                Job Title
              </label>

              <input
                type="text"
                placeholder="e.g. Software Developer"
                value={item.jobTitle}
                onChange={(e) =>
                  updateExperience(
                    index,
                    "jobTitle",
                    e.target.value
                  )
                }
              />

            </div>


            {/* Company */}

            <div className="form-group">

              <label>
                Company
              </label>

              <input
                type="text"
                placeholder="Company name"
                value={item.company}
                onChange={(e) =>
                  updateExperience(
                    index,
                    "company",
                    e.target.value
                  )
                }
              />

            </div>


            {/* Location */}

            <div className="form-group">

              <label>
                Location
              </label>

              <input
                type="text"
                placeholder="City, State, Country"
                value={item.location}
                onChange={(e) =>
                  updateExperience(
                    index,
                    "location",
                    e.target.value
                  )
                }
              />

            </div>


            {/* Employment Type */}

            <div className="form-group">

              <label>
                Employment Type
              </label>

              <select
                value={item.employmentType}
                onChange={(e) =>
                  updateExperience(
                    index,
                    "employmentType",
                    e.target.value
                  )
                }
              >

                <option>
                  Full-time
                </option>

                <option>
                  Part-time
                </option>

                <option>
                  Internship
                </option>

                <option>
                  Freelance
                </option>

              </select>

            </div>


            {/* Start Date */}

            <div className="form-group">

              <label>
                Start Date
              </label>

              <input
                type="month"
                value={item.startDate}
                onChange={(e) =>
                  updateExperience(
                    index,
                    "startDate",
                    e.target.value
                  )
                }
              />

            </div>


            {/* End Date */}

            <div className="form-group">

              <label>
                End Date
              </label>

              <input
                type="month"
                value={item.endDate}
                onChange={(e) =>
                  updateExperience(
                    index,
                    "endDate",
                    e.target.value
                  )
                }
              />

            </div>


            {/* Description */}

            <div className="form-group full-width">

              <label>
                Job Description
              </label>

              <textarea
                rows="5"
                placeholder="Describe your responsibilities and achievements..."
                value={item.description}
                onChange={(e) =>
                  updateExperience(
                    index,
                    "description",
                    e.target.value
                  )
                }
              />

            </div>

          </div>


          {/* DELETE */}

          <button
            type="button"
            className="add-button"
            onClick={() =>
              deleteExperience(index)
            }
          >
            Remove Experience
          </button>

        </div>

      ))}


      {/* ================= ADD BUTTON ================= */}

      <button
        type="button"
        className="add-button"
        onClick={addExperience}
      >
        + Add Experience
      </button>

    </div>
  );
}

export default ExperienceSection;