import "./ResumePreview.css";
import { useResume } from "../context/ResumeContext";

function ResumePreview() {
  const { resumeData } = useResume();

  const {
    personal,
    education = [],
    experience = [],
    skills = {},
    projects = [],
    certifications = [],
    achievements = [],
    languages = [],
    references = [],
    customSections = [],
  } = resumeData;

  return (
    <div className="resume-preview-wrapper">

      <div className="resume-paper">

        {/* ================= HEADER ================= */}

        <header className="resume-header">

          <h1>
            {personal.fullName || "YOUR NAME"}
          </h1>

          {personal.jobTitle && (
            <p>
              {personal.jobTitle}
            </p>
          )}

          <div className="resume-contact">

            {personal.location && (
              <span>
                {personal.location}
              </span>
            )}

            {personal.phone && (
              <span>
                {personal.phone}
              </span>
            )}

            {personal.email && (
              <span>
                {personal.email}
              </span>
            )}

          </div>

          <div className="resume-links">

            {personal.linkedin && (
              <span>
                {personal.linkedin}
              </span>
            )}

            {personal.github && (
              <span>
                {personal.github}
              </span>
            )}

          </div>

        </header>


        {/* ================= PROFESSIONAL SUMMARY ================= */}

        {personal.summary && (
          <section className="resume-section">

            <h2>
              PROFESSIONAL SUMMARY
            </h2>

            <p>
              {personal.summary}
            </p>

          </section>
        )}


        {/* ================= EDUCATION ================= */}

        {education.length > 0 && (
          <section className="resume-section">

            <h2>
              EDUCATION
            </h2>

            {education.map((item, index) => (

              <div
                className="resume-entry"
                key={index}
              >

                {item.degree && (
                  <div className="entry-title">

                    <strong>
                      {item.degree}
                    </strong>

                  </div>
                )}

                {(item.institution ||
                  item.location) && (

                  <div className="entry-subtitle">

                    {item.institution && (
                      <span>
                        {item.institution}
                      </span>
                    )}

                    {item.location && (
                      <span>
                        {item.location}
                      </span>
                    )}

                  </div>
                )}

                {(item.startYear ||
                  item.endYear ||
                  item.grade) && (

                  <p>

                    {item.startYear}

                    {item.startYear &&
                      item.endYear &&
                      " - "}

                    {item.endYear}

                    {item.grade && (
                      <>
                        {" | "}
                        {item.grade}
                      </>
                    )}

                  </p>
                )}

              </div>

            ))}

          </section>
        )}


        {/* ================= TECHNICAL SKILLS ================= */}

        {(skills.technicalSkills ||
          skills.toolsTechnologies ||
          skills.softSkills) && (

          <section className="resume-section">

            <h2>
              TECHNICAL SKILLS
            </h2>

            <div className="skills-content">

              {skills.technicalSkills && (
                <p>

                  <strong>
                    Technical Skills:
                  </strong>{" "}

                  {skills.technicalSkills}

                </p>
              )}

              {skills.toolsTechnologies && (
                <p>

                  <strong>
                    Tools & Technologies:
                  </strong>{" "}

                  {skills.toolsTechnologies}

                </p>
              )}

              {skills.softSkills && (
                <p>

                  <strong>
                    Soft Skills:
                  </strong>{" "}

                  {skills.softSkills}

                </p>
              )}

            </div>

          </section>
        )}


        {/* ================= EXPERIENCE ================= */}

        {experience.length > 0 && (
          <section className="resume-section">

            <h2>
              EXPERIENCE
            </h2>

            {experience.map((item, index) => (

              <div
                className="resume-entry"
                key={index}
              >

                {item.jobTitle && (
                  <div className="entry-title">

                    <strong>
                      {item.jobTitle}
                    </strong>

                  </div>
                )}

                {(item.company ||
                  item.location) && (

                  <div className="entry-subtitle">

                    {item.company && (
                      <span>
                        {item.company}
                      </span>
                    )}

                    {item.location && (
                      <span>
                        {item.location}
                      </span>
                    )}

                  </div>
                )}

                {(item.employmentType ||
                  item.startDate ||
                  item.endDate) && (

                  <p>

                    {item.employmentType}

                    {item.startDate && (
                      <>
                        {" | "}
                        {item.startDate}
                      </>
                    )}

                    {item.endDate && (
                      <>
                        {" - "}
                        {item.endDate}
                      </>
                    )}

                  </p>
                )}

                {item.description && (
                  <ul>

                    <li>
                      {item.description}
                    </li>

                  </ul>
                )}

              </div>

            ))}

          </section>
        )}


        {/* ================= PROJECTS ================= */}

        {projects.length > 0 && (
          <section className="resume-section">

            <h2>
              PROJECTS
            </h2>

            {projects.map((project, index) => (

              <div
                className="resume-entry"
                key={index}
              >

                {project.projectName && (
                  <div className="project-title">

                    <strong>
                      {project.projectName}
                    </strong>

                  </div>
                )}

                {project.technologies && (
                  <p className="tech-stack">

                    <strong>
                      Tech Stack:
                    </strong>{" "}

                    {project.technologies}

                  </p>
                )}

                {project.projectLink && (
                  <p className="tech-stack">

                    <strong>
                      Link:
                    </strong>{" "}

                    {project.projectLink}

                  </p>
                )}

                {project.description && (
                  <ul>

                    <li>
                      {project.description}
                    </li>

                  </ul>
                )}

              </div>

            ))}

          </section>
        )}


        {/* ================= CERTIFICATIONS ================= */}

        {certifications.length > 0 && (
          <section className="resume-section">

            <h2>
              CERTIFICATIONS
            </h2>

            {certifications.map((item, index) => (

              <div
                className="resume-entry"
                key={index}
              >

                {item.name && (
                  <div className="entry-title">

                    <strong>
                      {item.name}
                    </strong>

                  </div>
                )}

                {(item.organization ||
                  item.date) && (

                  <div className="entry-subtitle">

                    {item.organization && (
                      <span>
                        {item.organization}
                      </span>
                    )}

                    {item.date && (
                      <span>
                        {item.date}
                      </span>
                    )}

                  </div>
                )}

                {item.link && (
                  <p>
                    {item.link}
                  </p>
                )}

              </div>

            ))}

          </section>
        )}


        {/* ================= ACHIEVEMENTS ================= */}

        {achievements.length > 0 && (
          <section className="resume-section">

            <h2>
              ACHIEVEMENTS
            </h2>

            {achievements.map((item, index) => (

              <div
                className="resume-entry"
                key={index}
              >

                {item.title && (
                  <div className="entry-title">

                    <strong>
                      {item.title}
                    </strong>

                  </div>
                )}

                {item.description && (
                  <ul>

                    <li>
                      {item.description}
                    </li>

                  </ul>
                )}

              </div>

            ))}

          </section>
        )}


        {/* ================= LANGUAGES ================= */}

        {languages.length > 0 && (
          <section className="resume-section">

            <h2>
              LANGUAGES
            </h2>

            {languages.map((item, index) => (

              <p key={index}>

                <strong>
                  {item.language}
                </strong>

                {item.proficiency && (
                  <>
                    {" — "}
                    {item.proficiency}
                  </>
                )}

              </p>

            ))}

          </section>
        )}


        {/* ================= REFERENCES ================= */}

        {references.length > 0 && (
          <section className="resume-section">

            <h2>
              REFERENCES
            </h2>

            {references.map((item, index) => (

              <div
                className="resume-entry"
                key={index}
              >

                {item.name && (
                  <div className="entry-title">

                    <strong>
                      {item.name}
                    </strong>

                  </div>
                )}

                {item.designation && (
                  <p>
                    {item.designation}
                  </p>
                )}

                {item.company && (
                  <p>
                    {item.company}
                  </p>
                )}

                {(item.email ||
                  item.phone) && (

                  <p>

                    {item.email}

                    {item.email &&
                      item.phone &&
                      " | "}

                    {item.phone}

                  </p>
                )}

              </div>

            ))}

          </section>
        )}


        {/* ================= CUSTOM SECTIONS ================= */}

        {customSections.length > 0 &&
          customSections.map((item, index) => (

            <section
              className="resume-section"
              key={index}
            >

              {item.title && (
                <h2>
                  {item.title.toUpperCase()}
                </h2>
              )}

              {item.content && (
                <p>
                  {item.content}
                </p>
              )}

            </section>

          ))}

      </div>

    </div>
  );
}

export default ResumePreview;