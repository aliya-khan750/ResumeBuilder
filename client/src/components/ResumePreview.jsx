import "./ResumePreview.css";
import { useResume } from "../context/ResumeContext";
import html2pdf from "html2pdf.js";

function ResumePreview() {
  const { resumeData } = useResume();

  const {
    personal = {},
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
     CHECK WHETHER OBJECT HAS REAL CONTENT
  ===================================================== */

  const hasContent = (item) => {
    if (!item || typeof item !== "object") {
      return false;
    }

    return Object.values(item).some(
      (value) =>
        value !== null &&
        value !== undefined &&
        String(value).trim() !== ""
    );
  };

  /* =====================================================
     FILTER EMPTY ITEMS
  ===================================================== */

  const validEducation = education.filter(hasContent);

  const validExperience = experience.filter(hasContent);

  const validProjects = projects.filter(hasContent);

  const validCertifications =
    certifications.filter(hasContent);

  const validAchievements =
    achievements.filter(hasContent);

  const validLanguages =
    languages.filter(hasContent);

  const validReferences =
    references.filter(hasContent);

  const validCustomSections =
    customSections.filter(hasContent);


  /* =====================================================
     DOWNLOAD PDF
  ===================================================== */

  const downloadPDF = async () => {
    const resume = document.getElementById("resume-paper");

    if (!resume) {
      alert("Resume preview not found!");
      return;
    }

    let pdfResume = null;

    try {

      /* =================================================
         FILE NAME
      ================================================= */

      const cleanName =
        personal.fullName?.trim()
          ? personal.fullName
              .trim()
              .replace(/[^a-zA-Z0-9 ]/g, "")
              .replace(/\s+/g, "_")
          : "My";

      const fileName = `${cleanName}_Resume.pdf`;


      /* =================================================
         CLONE RESUME
      ================================================= */

      pdfResume = resume.cloneNode(true);


      /* =================================================
         IMPORTANT PDF CLASS
      ================================================= */

      pdfResume.classList.add("pdf-version");


      /* =================================================
         GIVE CLONE UNIQUE ID
      ================================================= */

      pdfResume.id = "resume-paper-pdf";


      /* =================================================
         REMOVE DOWNLOAD BUTTON
      ================================================= */

      pdfResume
        .querySelectorAll(".download-button")
        .forEach((button) => {
          button.remove();
        });


      /* =================================================
         PDF A4 SIZE

         794px ≈ 210mm
         Height is NOT forced.

         Content decides the height.
      ================================================= */

      pdfResume.style.width = "794px";

      pdfResume.style.minWidth = "794px";

      pdfResume.style.maxWidth = "794px";

      pdfResume.style.height = "auto";

      pdfResume.style.minHeight = "1123px";

      pdfResume.style.maxHeight = "none";


      /* =================================================
         PDF PADDING
      ================================================= */

      pdfResume.style.padding =
        "55px 60px";

      pdfResume.style.boxSizing =
        "border-box";


      /* =================================================
         PDF FONT
      ================================================= */

      pdfResume.style.fontFamily =
        "Arial, Helvetica, sans-serif";

      pdfResume.style.fontSize = "13px";

      pdfResume.style.lineHeight = "1.45";


      /* =================================================
         PDF COLORS
      ================================================= */

      pdfResume.style.backgroundColor =
        "#ffffff";

      pdfResume.style.color =
        "#111111";


      /* =================================================
         REMOVE SCREEN STYLES
      ================================================= */

      pdfResume.style.transform =
        "none";

      pdfResume.style.boxShadow =
        "none";

      pdfResume.style.overflow =
        "visible";


      /* =================================================
         POSITION OFF SCREEN

         Do NOT use z-index: -1.
         That can make html2canvas capture blank.
      ================================================= */

      pdfResume.style.position =
        "absolute";

      pdfResume.style.left =
        "-10000px";

      pdfResume.style.top =
        "0";

      pdfResume.style.zIndex =
        "9999";


      /* =================================================
         ADD CLONE TO BODY
      ================================================= */

      document.body.appendChild(pdfResume);


      /* =================================================
         FORCE PDF FONT SIZES
      ================================================= */

      const pdfStyle = document.createElement("style");

      pdfStyle.id =
        "temporary-pdf-style";

      pdfStyle.innerHTML = `
        #resume-paper-pdf {
          width: 794px !important;
          min-width: 794px !important;
          max-width: 794px !important;

          height: auto !important;
          min-height: 1123px !important;
          max-height: none !important;

          padding: 55px 60px !important;

          box-sizing: border-box !important;

          background: #ffffff !important;
          color: #111111 !important;

          font-family: Arial, Helvetica, sans-serif !important;

          font-size: 13px !important;
          line-height: 1.45 !important;

          overflow: visible !important;

          transform: none !important;
          box-shadow: none !important;
        }


        #resume-paper-pdf .resume-header {
          padding-bottom: 10px !important;
          margin-bottom: 14px !important;
        }


        #resume-paper-pdf .resume-header h1 {
          font-size: 28px !important;
          line-height: 1.2 !important;
          margin-bottom: 7px !important;
        }


        #resume-paper-pdf .resume-header > p {
          font-size: 14px !important;
          line-height: 1.3 !important;
        }


        #resume-paper-pdf .resume-contact,
        #resume-paper-pdf .resume-links {
          font-size: 11px !important;
          line-height: 1.4 !important;
        }


        #resume-paper-pdf .resume-section {
          margin-bottom: 12px !important;

          break-inside: avoid !important;
          page-break-inside: avoid !important;
        }


        #resume-paper-pdf .resume-section h2 {
          font-size: 14px !important;
          line-height: 1.25 !important;

          margin-bottom: 6px !important;
          padding-bottom: 4px !important;
        }


        #resume-paper-pdf .resume-section p {
          font-size: 12px !important;
          line-height: 1.45 !important;

          margin: 4px 0 !important;
        }


        #resume-paper-pdf .resume-section li {
          font-size: 12px !important;
          line-height: 1.45 !important;

          margin-bottom: 3px !important;
        }


        #resume-paper-pdf .resume-entry {
          margin-bottom: 8px !important;

          break-inside: avoid !important;
          page-break-inside: avoid !important;
        }


        #resume-paper-pdf .entry-title {
          font-size: 13px !important;
          line-height: 1.35 !important;
        }


        #resume-paper-pdf .entry-subtitle {
          font-size: 11px !important;
          line-height: 1.35 !important;
        }


        #resume-paper-pdf .skills-content p {
          font-size: 12px !important;
          line-height: 1.45 !important;
        }


        #resume-paper-pdf .project-title {
          font-size: 13px !important;
          line-height: 1.35 !important;
        }


        #resume-paper-pdf .tech-stack {
          font-size: 11px !important;
          line-height: 1.4 !important;
        }


        #resume-paper-pdf ul {
          margin-top: 4px !important;
        }
      `;

      document.head.appendChild(pdfStyle);


      /* =================================================
         WAIT FOR BROWSER TO RENDER CLONE
      ================================================= */

      await new Promise((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setTimeout(resolve, 100);
          });
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

          backgroundColor:
            "#ffffff",

          logging: false,

          scrollX: 0,

          scrollY: 0,

          windowWidth: 794,

          windowHeight:
            Math.max(
              pdfResume.scrollHeight,
              1123
            ),
        },

        jsPDF: {

          unit: "mm",

          format: "a4",

          orientation: "portrait",

          compress: true,
        },

        pagebreak: {

          mode: [
            "css",
            "legacy",
          ],
        },
      };


      /* =================================================
         GENERATE PDF
      ================================================= */

      await html2pdf()
        .set(options)
        .from(pdfResume)
        .save();


      /* =================================================
         CLEANUP PDF CLONE
      ================================================= */

      if (
        pdfResume &&
        pdfResume.parentNode
      ) {
        pdfResume.parentNode.removeChild(
          pdfResume
        );
      }


      if (
        pdfStyle &&
        pdfStyle.parentNode
      ) {
        pdfStyle.parentNode.removeChild(
          pdfStyle
        );
      }

    } catch (error) {

      console.error(
        "PDF generation error:",
        error
      );


      /* =================================================
         CLEANUP AFTER ERROR
      ================================================= */

      if (
        pdfResume &&
        pdfResume.parentNode
      ) {
        pdfResume.parentNode.removeChild(
          pdfResume
        );
      }


      const existingStyle =
        document.getElementById(
          "temporary-pdf-style"
        );

      if (
        existingStyle &&
        existingStyle.parentNode
      ) {
        existingStyle.parentNode.removeChild(
          existingStyle
        );
      }


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
            {personal.fullName ||
              "YOUR NAME"}
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

        {personal.summary?.trim() && (

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

        {validEducation.length > 0 && (

          <section className="resume-section">

            <h2>
              EDUCATION
            </h2>


            {validEducation.map(
              (item, index) => (

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

              )
            )}

          </section>

        )}


        {/* =================================================
            TECHNICAL SKILLS
        ================================================= */}

        {(skills.technicalSkills?.trim() ||
          skills.toolsTechnologies?.trim() ||
          skills.softSkills?.trim()) && (

          <section className="resume-section">

            <h2>
              TECHNICAL SKILLS
            </h2>


            <div className="skills-content">

              {skills.technicalSkills?.trim() && (

                <p>

                  <strong>
                    Technical Skills:
                  </strong>{" "}

                  {skills.technicalSkills}

                </p>

              )}


              {skills.toolsTechnologies?.trim() && (

                <p>

                  <strong>
                    Tools & Technologies:
                  </strong>{" "}

                  {skills.toolsTechnologies}

                </p>

              )}


              {skills.softSkills?.trim() && (

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

        {validExperience.length > 0 && (

          <section className="resume-section">

            <h2>
              EXPERIENCE
            </h2>


            {validExperience.map(
              (item, index) => (

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

              )
            )}

          </section>

        )}


        {/* =================================================
            PROJECTS
        ================================================= */}

        {validProjects.length > 0 && (

          <section className="resume-section">

            <h2>
              PROJECTS
            </h2>


            {validProjects.map(
              (project, index) => (

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

              )
            )}

          </section>

        )}


        {/* =================================================
            CERTIFICATIONS
        ================================================= */}

        {validCertifications.length > 0 && (

          <section className="resume-section">

            <h2>
              CERTIFICATIONS
            </h2>


            {validCertifications.map(
              (item, index) => (

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

              )
            )}

          </section>

        )}


        {/* =================================================
            ACHIEVEMENTS
        ================================================= */}

        {validAchievements.length > 0 && (

          <section className="resume-section">

            <h2>
              ACHIEVEMENTS
            </h2>


            {validAchievements.map(
              (item, index) => (

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

              )
            )}

          </section>

        )}


        {/* =================================================
            LANGUAGES
        ================================================= */}

        {validLanguages.length > 0 && (

          <section className="resume-section">

            <h2>
              LANGUAGES
            </h2>


            {validLanguages.map(
              (item, index) => (

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

              )
            )}

          </section>

        )}


        {/* =================================================
            REFERENCES
        ================================================= */}

        {validReferences.length > 0 && (

          <section className="resume-section">

            <h2>
              REFERENCES
            </h2>


            {validReferences.map(
              (item, index) => (

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

              )
            )}

          </section>

        )}


        {/* =================================================
            CUSTOM SECTIONS
        ================================================= */}

        {validCustomSections.length > 0 &&
          validCustomSections.map(
            (item, index) => (

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

            )
          )}

      </div>

    </div>
  );
}

export default ResumePreview;