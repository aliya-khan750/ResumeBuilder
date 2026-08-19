import { useResume } from "../context/ResumeContext";

function SkillsSection() {
  const { resumeData, updateResumeData } = useResume();

  const skills = resumeData.skills;

  const updateSkill = (field, value) => {
    updateResumeData("skills", {
      ...skills,
      [field]: value,
    });
  };

  return (
    <div className="editor-section">

      <div className="section-title">
        <div>
          <h3>Skills</h3>
          <p>Add your technical and professional skills.</p>
        </div>

        <span>⌃</span>
      </div>

      <div className="form-grid">

        {/* Technical Skills */}

        <div className="form-group full-width">

          <label>
            Technical Skills
          </label>

          <input
            type="text"
            placeholder="e.g. React, JavaScript, Node.js, MongoDB"
            value={skills.technicalSkills || ""}
            onChange={(e) =>
              updateSkill(
                "technicalSkills",
                e.target.value
              )
            }
          />

        </div>


        {/* Tools & Technologies */}

        <div className="form-group full-width">

          <label>
            Tools & Technologies
          </label>

          <input
            type="text"
            placeholder="e.g. Git, GitHub, VS Code, Docker"
            value={skills.toolsTechnologies || ""}
            onChange={(e) =>
              updateSkill(
                "toolsTechnologies",
                e.target.value
              )
            }
          />

        </div>


        {/* Soft Skills */}

        <div className="form-group full-width">

          <label>
            Soft Skills
          </label>

          <input
            type="text"
            placeholder="e.g. Communication, Leadership, Problem Solving"
            value={skills.softSkills || ""}
            onChange={(e) =>
              updateSkill(
                "softSkills",
                e.target.value
              )
            }
          />

        </div>

      </div>

    </div>
  );
}

export default SkillsSection;