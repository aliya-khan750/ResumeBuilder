import "./ResumePreview.css";
import { useResume } from "../context/ResumeContext";
import html2pdf from "html2pdf.js";

function ResumePreview() {
  const { resumeData } = useResume();

  /* =====================================================
     SELECTED TEMPLATE
  ===================================================== */

  const selectedTemplate =
    localStorage.getItem("selectedTemplate") || "classic";


  /* =====================================================
     RESUME DATA
  ===================================================== */

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
     CHECK CONTENT
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
     VALID DATA
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
    const resume =
      document.getElementById("resume-paper");

    if (!resume) {
      alert("Resume preview not found!");
      return;
    }

    let pdfStyle = null;

    try {

      /* =================================================
         FILE NAME
      ================================================= */

      const cleanName =
        personal.fullName?.trim()
          ? personal.fullName
              .trim()
              .replace(
                /[^a-zA-Z0-9 ]/g,
                ""
              )
              .replace(
                /\s+/g,
                "_"
              )
          : "My";

      const fileName =
        `${cleanName}_Resume.pdf`;


      /* =================================================
         ADD PDF CLASS
      ================================================= */

      resume.classList.add("pdf-export");


      /* =================================================
         TEMPORARY PDF CSS
      ================================================= */

      pdfStyle =
        document.createElement("style");

      pdfStyle.id =
        "resume-pdf-temporary-style";

      pdfStyle.innerHTML = `

        /* ==============================================
           PDF MAIN PAPER
        ============================================== */

        #resume-paper.pdf-export {

          width: 794px !important;

          min-width: 794px !important;

          max-width: 794px !important;

          height: auto !important;

          min-height: 0 !important;

          max-height: none !important;

          margin: 0 !important;

          padding: 55px 60px !important;

          box-sizing: border-box !important;

          background: #ffffff !important;

          color: #111111 !important;

          font-family:
            Arial,
            Helvetica,
            sans-serif !important;

          font-size: 13px !important;

          line-height: 1.45 !important;

          overflow: visible !important;

          box-shadow: none !important;

          transform: none !important;

          opacity: 1 !important;

          visibility: visible !important;

          display: block !important;

        }


        /* ==============================================
           HEADER
        ============================================== */

        #resume-paper.pdf-export
        .resume-header {

          padding-bottom: 10px !important;

          margin-bottom: 14px !important;

        }


        #resume-paper.pdf-export
        .resume-header h1 {

          margin: 0 0 7px !important;

          font-size: 28px !important;

          line-height: 1.2 !important;

          letter-spacing: 1px !important;

        }


        #resume-paper.pdf-export
        .resume-header > p {

          margin: 0 0 7px !important;

          font-size: 14px !important;

          line-height: 1.3 !important;

        }


        /* ==============================================
           CONTACT
        ============================================== */

        #resume-paper.pdf-export
        .resume-contact {

          font-size: 11px !important;

          line-height: 1.4 !important;

          gap: 4px 10px !important;

        }


        #resume-paper.pdf-export
        .resume-links {

          margin-top: 4px !important;

          font-size: 11px !important;

          line-height: 1.4 !important;

          gap: 4px 12px !important;

        }


        /* ==============================================
           SECTIONS
        ============================================== */

        #resume-paper.pdf-export
        .resume-section {

          margin-bottom: 12px !important;

          break-inside: avoid !important;

          page-break-inside: avoid !important;

        }


        #resume-paper.pdf-export
        .resume-section h2 {

          margin: 0 0 6px !important;

          padding-bottom: 4px !important;

          font-size: 14px !important;

          line-height: 1.25 !important;

          letter-spacing: 0.4px !important;

        }


        #resume-paper.pdf-export
        .resume-section p {

          margin: 4px 0 !important;

          font-size: 12px !important;

          line-height: 1.45 !important;

        }


        /* ==============================================
           ENTRIES
        ============================================== */

        #resume-paper.pdf-export
        .resume-entry {

          margin-bottom: 8px !important;

          break-inside: avoid !important;

          page-break-inside: avoid !important;

        }


        #resume-paper.pdf-export
        .entry-title {

          margin-bottom: 2px !important;

          font-size: 13px !important;

          line-height: 1.35 !important;

        }


        #resume-paper.pdf-export
        .entry-subtitle {

          font-size: 11px !important;

          line-height: 1.35 !important;

        }


        /* ==============================================
           LISTS
        ============================================== */

        #resume-paper.pdf-export
        ul {

          margin: 4px 0 0 !important;

          padding-left: 18px !important;

        }


        #resume-paper.pdf-export
        li {

          margin-bottom: 3px !important;

          font-size: 12px !important;

          line-height: 1.45 !important;

        }


        /* ==============================================
           SKILLS
        ============================================== */

        #resume-paper.pdf-export
        .skills-content {

          width: 100% !important;

        }


        #resume-paper.pdf-export
        .skills-content p {

          margin: 4px 0 !important;

          font-size: 12px !important;

          line-height: 1.45 !important;

        }


        /* ==============================================
           PROJECTS
        ============================================== */

        #resume-paper.pdf-export
        .project-title {

          margin-bottom: 2px !important;

          font-size: 13px !important;

          line-height: 1.35 !important;

        }


        #resume-paper.pdf-export
        .tech-stack {

          margin: 3px 0 !important;

          font-size: 11px !important;

          line-height: 1.4 !important;

        }


        /* ==============================================
           CLASSIC TEMPLATE
        ============================================== */

        #resume-paper.pdf-export.template-classic
        .resume-header {

          text-align: center !important;

          border-bottom:
            1px solid #111111 !important;

        }


        /* ==============================================
           MODERN TEMPLATE
        ============================================== */

        #resume-paper.pdf-export.template-modern {

          font-family:
            "Segoe UI",
            Arial,
            sans-serif !important;

        }


        #resume-paper.pdf-export.template-modern
        .resume-header {

          text-align: left !important;

          border-bottom:
            3px solid #A8472B !important;

        }


        #resume-paper.pdf-export.template-modern
        .resume-header h1 {

          color: #A8472B !important;

        }


        #resume-paper.pdf-export.template-modern
        .resume-section h2 {

          color: #A8472B !important;

          border-bottom:
            1px solid #d8c2b8 !important;

        }


        /* ==============================================
           MINIMAL TEMPLATE
        ============================================== */

        #resume-paper.pdf-export.template-minimal
        .resume-header {

          text-align: left !important;

          border-bottom:
            1px solid #222222 !important;

        }


        #resume-paper.pdf-export.template-minimal
        .resume-section h2 {

          border-bottom: none !important;

          color: #222222 !important;

        }


        /* ==============================================
           PAGE BREAK CONTROL
        ============================================== */

        #resume-paper.pdf-export
        .resume-section {

          break-inside: avoid !important;

          page-break-inside: avoid !important;

        }


        #resume-paper.pdf-export
        .resume-entry {

          break-inside: avoid !important;

          page-break-inside: avoid !important;

        }

      `;


      document.head.appendChild(pdfStyle);


      /* =================================================
         WAIT FOR BROWSER
      ================================================= */

      await new Promise((resolve) => {

        requestAnimationFrame(() => {

          requestAnimationFrame(() => {

            setTimeout(resolve, 300);

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
          quality: 0.98,
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

          width: 794,

          windowWidth: 794,

        },

        jsPDF: {

          unit: "mm",

          format: "a4",

          orientation:
            "portrait",

          compress: true,

        },

        pagebreak: {

          mode: ["css"],

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
         CLEANUP
      ================================================= */

      resume.classList.remove("pdf-export");

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

      resume.classList.remove("pdf-export");


      const existingStyle =
        document.getElementById(
          "resume-pdf-temporary-style"
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


  /* =====================================================
     RETURN
  ===================================================== */

  return (

    <div className="resume-preview-wrapper">


      {/* =================================================
          DOWNLOAD BAR
          
          IMPORTANT:
          This is OUTSIDE the resume paper.
          Therefore it cannot overlap the resume.
      ================================================= */}

      <div className="download-bar">

        <button
          type="button"
          className="download-button"
          onClick={downloadPDF}
        >
          Download PDF
        </button>

      </div>


      {/* =================================================
          RESUME PAPER
      ================================================= */}

      <div
        id="resume-paper"
        className={
          `resume-paper template-${selectedTemplate}`
        }
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