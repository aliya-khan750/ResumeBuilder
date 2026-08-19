import { useResume } from "../context/ResumeContext";

function ProjectsSection() {
  const { resumeData, updateResumeData } = useResume();

  const projects = resumeData.projects || [];

  // ================= ADD PROJECT =================

  const addProject = () => {
    const newProject = {
      projectName: "",
      technologies: "",
      projectLink: "",
      description: "",
    };

    updateResumeData("projects", [
      ...projects,
      newProject,
    ]);
  };

  // ================= UPDATE PROJECT =================

  const updateProject = (index, field, value) => {
    const updatedProjects = projects.map(
      (project, i) => {
        if (i === index) {
          return {
            ...project,
            [field]: value,
          };
        }

        return project;
      }
    );

    updateResumeData(
      "projects",
      updatedProjects
    );
  };

  // ================= DELETE PROJECT =================

  const deleteProject = (index) => {
    const updatedProjects = projects.filter(
      (_, i) => i !== index
    );

    updateResumeData(
      "projects",
      updatedProjects
    );
  };

  return (
    <div className="editor-section">

      {/* ================= HEADER ================= */}

      <div className="section-title">

        <div>

          <h3>
            Projects
          </h3>

          <p>
            Add your projects and highlight your work.
          </p>

        </div>

        <span>
          ⌃
        </span>

      </div>


      {/* ================= PROJECT LIST ================= */}

      {projects.map((project, index) => (

        <div
          key={index}
          className="project-entry"
        >

          <div className="form-grid">

            {/* PROJECT NAME */}

            <div className="form-group">

              <label>
                Project Name
              </label>

              <input
                type="text"
                placeholder="e.g. AI Habit Tracker"
                value={project.projectName || ""}
                onChange={(e) =>
                  updateProject(
                    index,
                    "projectName",
                    e.target.value
                  )
                }
              />

            </div>


            {/* TECHNOLOGIES */}

            <div className="form-group">

              <label>
                Technologies
              </label>

              <input
                type="text"
                placeholder="e.g. React, Node.js, MongoDB"
                value={project.technologies || ""}
                onChange={(e) =>
                  updateProject(
                    index,
                    "technologies",
                    e.target.value
                  )
                }
              />

            </div>


            {/* PROJECT LINK */}

            <div className="form-group full-width">

              <label>
                Project Link
              </label>

              <input
                type="text"
                placeholder="https://github.com/username/project"
                value={project.projectLink || ""}
                onChange={(e) =>
                  updateProject(
                    index,
                    "projectLink",
                    e.target.value
                  )
                }
              />

            </div>


            {/* PROJECT DESCRIPTION */}

            <div className="form-group full-width">

              <label>
                Project Description
              </label>

              <textarea
                rows="4"
                placeholder="Describe your project, features, and your contribution..."
                value={project.description || ""}
                onChange={(e) =>
                  updateProject(
                    index,
                    "description",
                    e.target.value
                  )
                }
              />

            </div>

          </div>


          {/* ================= REMOVE PROJECT ================= */}

          <button
            type="button"
            className="add-button"
            onClick={() =>
              deleteProject(index)
            }
          >
            Remove Project
          </button>

        </div>

      ))}


      {/* ================= ADD PROJECT ================= */}

      <button
        type="button"
        className="add-button"
        onClick={addProject}
      >
        + Add Project
      </button>

    </div>
  );
}

export default ProjectsSection;