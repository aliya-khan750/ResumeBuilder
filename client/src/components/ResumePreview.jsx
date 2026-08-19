import "./ResumePreview.css";
import { useResume } from "../context/ResumeContext";

function ResumePreview() {
  const { resumeData } = useResume();

  const { personal, education } = resumeData;

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
              <span>{personal.location}</span>
            )}

            {personal.phone && (
              <span>{personal.phone}</span>
            )}

            {personal.email && (
              <span>{personal.email}</span>
            )}

          </div>

          <div className="resume-links">

            {personal.linkedin && (
              <span>{personal.linkedin}</span>
            )}

            {personal.github && (
              <span>{personal.github}</span>
            )}

          </div>

        </header>


        {/* ================= PROFESSIONAL SUMMARY ================= */}

        {personal.summary && (
          <section className="resume-section">

            <h2>PROFESSIONAL SUMMARY</h2>

            <p>
              {personal.summary}
            </p>

          </section>
        )}


        {/* ================= EDUCATION ================= */}

        {education &&
          (
            education.degree ||
            education.institution ||
            education.startYear ||
            education.endYear ||
            education.location ||
            education.grade
          ) && (
            <section className="resume-section">

              <h2>EDUCATION</h2>

              <div className="resume-entry">

                {education.degree && (
                  <div className="entry-title">
                    <strong>
                      {education.degree}
                    </strong>
                  </div>
                )}

                <div className="entry-subtitle">

                  {education.institution && (
                    <span>
                      {education.institution}
                    </span>
                  )}

                  {education.location && (
                    <span>
                      {education.location}
                    </span>
                  )}

                </div>

                {(education.startYear ||
                  education.endYear ||
                  education.grade) && (
                  <p>

                    {education.startYear}

                    {education.startYear &&
                      education.endYear &&
                      " - "}

                    {education.endYear}

                    {education.grade && (
                      <>
                        {" | "}
                        {education.grade}
                      </>
                    )}

                  </p>
                )}

              </div>

            </section>
          )}


        {/* ================= TECHNICAL SKILLS ================= */}

        <section className="resume-section">

          <h2>TECHNICAL SKILLS</h2>

          <div className="skills-content">

            <p>
              <strong>Programming Languages:</strong>{" "}
              Add your programming languages
            </p>

            <p>
              <strong>Web Development:</strong>{" "}
              Add your web development skills
            </p>

            <p>
              <strong>Databases:</strong>{" "}
              Add your databases
            </p>

            <p>
              <strong>Tools & Technologies:</strong>{" "}
              Add your tools and technologies
            </p>

          </div>

        </section>


        {/* ================= EXPERIENCE ================= */}

        <section className="resume-section">

          <h2>EXPERIENCE</h2>

          <div className="resume-entry">

            <div className="entry-title">
              <strong>Job Title</strong>
            </div>

            <div className="entry-subtitle">

              <span>
                Company Name
              </span>

              <span>
                Location
              </span>

            </div>

            <ul>

              <li>
                Your responsibility or achievement
              </li>

              <li>
                Your responsibility or achievement
              </li>

            </ul>

          </div>

        </section>


        {/* ================= PROJECTS ================= */}

        <section className="resume-section">

          <h2>PROJECTS</h2>

          <div className="resume-entry">

            <div className="project-title">
              <strong>
                Project Name
              </strong>
            </div>

            <p className="tech-stack">

              <strong>
                Tech Stack:
              </strong>{" "}

              Add technologies used

            </p>

            <ul>

              <li>
                Describe your project and its main functionality.
              </li>

              <li>
                Describe your contribution and key features.
              </li>

            </ul>

          </div>

        </section>


        {/* ================= CERTIFICATIONS ================= */}

        <section className="resume-section">

          <h2>CERTIFICATIONS</h2>

          <ul>

            <li>
              Certification Name — Issuing Organization
            </li>

          </ul>

        </section>


        {/* ================= ACHIEVEMENTS ================= */}

        <section className="resume-section">

          <h2>ACHIEVEMENTS</h2>

          <ul>

            <li>
              Add your achievement or award
            </li>

            <li>
              Add another achievement
            </li>

          </ul>

        </section>


        {/* ================= LANGUAGES ================= */}

        <section className="resume-section">

          <h2>LANGUAGES</h2>

          <p>
            Add languages you know
          </p>

        </section>

      </div>

    </div>
  );
}

export default ResumePreview;