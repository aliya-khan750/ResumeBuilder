import "./ResumePreview.css";
import { useResume } from "../context/ResumeContext";
import html2pdf from "html2pdf.js";

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


  /* =====================================================
     DOWNLOAD PDF
  ===================================================== */

  const downloadPDF = async () => {
    const resume = document.getElementById("resume-paper");

    if (!resume) {
      alert("Resume preview not found!");
      return;
    }

    try {
      /* =================================================
         FILE NAME
      ================================================= */

      const cleanName = personal.fullName?.trim()
        ? personal.fullName
            .trim()
            .replace(/[^a-zA-Z0-9 ]/g, "")
            .replace(/\s+/g, "_")
        : "My";

      const fileName = `${cleanName}_Resume.pdf`;


      /* =================================================
         SAVE ORIGINAL STYLES
      ================================================= */

      const originalStyles = {
        width: resume.style.width,
        height: resume.style.height,
        minWidth: resume.style.minWidth,
        minHeight: resume.style.minHeight,
        maxWidth: resume.style.maxWidth,
        maxHeight: resume.style.maxHeight,
        padding: resume.style.padding,
        boxSizing: resume.style.boxSizing,
        transform: resume.style.transform,
        boxShadow: resume.style.boxShadow,
        overflow: resume.style.overflow,
        fontSize: resume.style.fontSize,
        lineHeight: resume.style.lineHeight,
      };


      /* =================================================
         TEMPORARY A4 SIZE

         A4 at 96 DPI:
         794px × 1123px
      ================================================= */

      resume.style.width = "794px";
      resume.style.height = "1123px";

      resume.style.minWidth = "794px";
      resume.style.minHeight = "1123px";

      resume.style.maxWidth = "794px";
      resume.style.maxHeight = "1123px";

      resume.style.padding = "55px 65px";

      resume.style.boxSizing = "border-box";

      resume.style.transform = "none";

      resume.style.boxShadow = "none";

      resume.style.overflow = "hidden";

      resume.style.fontSize = "11px";

      resume.style.lineHeight = "1.4";


      /* =================================================
         FORCE WHITE BACKGROUND
      ================================================= */

      resume.style.backgroundColor = "#ffffff";

      resume.style.color = "#111111";


      /* =================================================
         WAIT FOR BROWSER RENDER
      ================================================= */

      await new Promise((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(resolve);
        });
      });


      /* =================================================
         PDF OPTIONS
      ================================================= */

      const options = {
        margin: 0,

        filename: fileName,

        image: {
          type: "jpeg",
          quality: 1,
        },

        html2canvas: {
          scale: 2,

          useCORS: true,

          allowTaint: true,

          backgroundColor: "#ffffff",

          logging: false,

          scrollX: 0,

          scrollY: 0,

          windowWidth: 794,

          windowHeight: 1123,
        },

        jsPDF: {
          unit: "mm",

          format: "a4",

          orientation: "portrait",

          compress: true,
        },

        pagebreak: {
          mode: ["css", "legacy"],
        },
      };


      /* =================================================
         GENERATE PDF
      ================================================= */

      await html2pdf()
        .set(options)
        .from(resume)
        .save();


      /* =================================================
         RESTORE LIVE PREVIEW
      ================================================= */

      resume.style.width = originalStyles.width;
      resume.style.height = originalStyles.height;

      resume.style.minWidth = originalStyles.minWidth;
      resume.style.minHeight = originalStyles.minHeight;

      resume.style.maxWidth = originalStyles.maxWidth;
      resume.style.maxHeight = originalStyles.maxHeight;

      resume.style.padding = originalStyles.padding;

      resume.style.boxSizing = originalStyles.boxSizing;

      resume.style.transform = originalStyles.transform;

      resume.style.boxShadow = originalStyles.boxShadow;

      resume.style.overflow = originalStyles.overflow;

      resume.style.fontSize = originalStyles.fontSize;

      resume.style.lineHeight = originalStyles.lineHeight;

    } catch (error) {

      console.error(
        "PDF generation error:",
        error
      );

      alert(
        "Unable to generate PDF. Please try again."
      );
    }
  };


  return (
    <div className="resume-preview-wrapper">


      {/* =================================================
          DOWNLOAD BUTTON
      ================================================= */}

      <button
        type="button"
        className="download-button"
        onClick={downloadPDF}
      >
        Download PDF
      </button>


      {/* =================================================
          RESUME PAPER
      ================================================= */}

      <div
        id="resume-paper"
        className="resume-paper"
      >


        {/* =================================================
            HEADER
        ================================================= */}

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


        {/* =================================================
            PROFESSIONAL SUMMARY
        ================================================= */}

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


        {/* =================================================
            EDUCATION
        ================================================= */}

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


        {/* =================================================
            TECHNICAL SKILLS
        ================================================= */}

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


        {/* =================================================
            EXPERIENCE
        ================================================= */}

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


        {/* =================================================
            PROJECTS
        ================================================= */}

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


        {/* =================================================
            CERTIFICATIONS
        ================================================= */}

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


        {/* =================================================
            ACHIEVEMENTS
        ================================================= */}

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


        {/* =================================================
            LANGUAGES
        ================================================= */}

        {languages.length > 0 && (

          <section className="resume-section">

            <h2>
              LANGUAGES
            </h2>

            {languages.map((item, index) => (

              <p key={index}>

                {item.language && (
                  <strong>
                    {item.language}
                  </strong>
                )}

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


        {/* =================================================
            REFERENCES
        ================================================= */}

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


        {/* =================================================
            CUSTOM SECTIONS
        ================================================= */}

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